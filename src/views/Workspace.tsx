import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import TableSkeleton from "../components/TableSkeleton";
import usePerceivedLoading from "../hooks/use-perceived-loading";
import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import SystemErrorMessage from "../components/SystemErrorMessage";

const Workspace: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<{
        title: string;
        message: string;
        errorCode: string;
    }>({
        title: "",
        message: "",
        errorCode: "",
    });
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isPanelReady, setIsPanelReady] = useState(false);

    const [story, setStory] = useState<any>(null);
    const [requestedType, setRequestedType] = useState<string | null>(null);
    const [loadedType, setLoadedType] = useState<string | null>(null);

    const [isContentLoading, setIsContentLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const isLoading = usePerceivedLoading(isContentLoading, isError, 600);

    const resetView = () => {
        setStory(null);
        setIsError(false);
    };

    const startLoading = () => {
        setIsContentLoading(true);
        setIsError(false);
    };

    const openPanel = () => {
        startLoading();
        setIsPanelOpen(true);

        // toggle on body as well
        document.body.classList.add("push-modal--open");

        setIsPanelReady(false);
        setTimeout(() => setIsPanelReady(true), 600);
    };

    const closePanel = () => {
        setIsPanelOpen(false);

        // toggle on body as well
        document.body.classList.remove("push-modal--open");
        setLoadedType(null);

        setIsPanelReady(false);
        setTimeout(() => setIsPanelReady(true), 600);
    };

    useEffect(() => {
        setIsPanelOpen(false);
        document.body.classList.remove("push-modal--open");

        startLoading();
        resetView();

        setRequestedType(null);
    }, []);

    useEffect(() => {
        if (!isPanelReady || !isPanelOpen || !requestedType) return;

        setStory(null);

        const api = getStoryblokApi();

        api.get(`cdn/stories/workspace/${requestedType}`, {
            version: "draft",
        })
            .then((res) => {
                setStory(res.data.story);
                setLoadedType(requestedType);
            })
            .catch(() => {
                setErrorMessage({
                    title: "Failed to load content",
                    message: `An error occurred while fetching the details for /workspace/${requestedType} :(`,
                    errorCode: `${requestedType.toUpperCase()}_ERR`,
                });
                setIsError(true);
            })
            .finally(() => setIsContentLoading(false));
    }, [isPanelReady, isPanelOpen, requestedType]);

    return (
        <div className={`main main--panel${isPanelOpen ? " open" : ""}`}>
            <div className="container">
                <PageHeader labelLeft="Workspace : : Battlestation" />
                <h1>Workspace</h1>
                <p>
                    Personal space is everything to me, so I take a lot of pride
                    and care in setting up a workspace (or as the nerds call it:{" "}
                    <em>battlestation</em>).
                </p>

                <p>
                    As I am always looking to improve my space for both comfort
                    and creativity, I know others might find inspiration from
                    seeing how I have things set up!
                </p>

                <hr />

                <section className="workspace-grid">
                    <div className="workspace-item">
                        <div className="image-container">
                            <img
                                src="assets/workspace/setup.jpg"
                                alt="My workspace setup"
                            />
                        </div>
                        <div className="workspace-item__info">
                            <div className="card">
                                <span className="tag green">Battlestation</span>
                                <p>Setup products</p>
                            </div>
                            <button
                                type="button"
                                className="workspace-item__info__btn"
                                onClick={() => {
                                    if ("setup" === loadedType && story) return;

                                    setRequestedType("setup");
                                    openPanel();
                                }}
                            >
                                <i className="fa-solid fa-chevron-right"></i>
                                <span>Where did you get that?</span>
                            </button>
                        </div>
                    </div>
                    <div className="workspace-item">
                        <div className="image-container">
                            <img src="assets/workspace/pc.jpg" alt="My PC" />
                        </div>
                        <div className="workspace-item__info">
                            <div className="card">
                                <span className="tag green">PC setup</span>
                                <p>Custom built PC specs</p>
                            </div>
                            <button
                                type="button"
                                className="workspace-item__info__btn"
                                onClick={() => {
                                    if ("pc_anatomy" === loadedType && story)
                                        return;

                                    setRequestedType("pc_anatomy");
                                    openPanel();
                                }}
                            >
                                <i className="fa-solid fa-chevron-right"></i>

                                <span>PC Anatomy</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <section className="page-modal">
                <button
                    type="button"
                    className="page-modal__btn"
                    onClick={() => {
                        closePanel();
                        resetView();
                        setRequestedType(null);
                        setIsContentLoading(true);
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="page-modal__content">
                    <div className="container">
                        <PageHeader labelLeft="Workspace : : details" />

                        {isError && (
                            <SystemErrorMessage
                                title={errorMessage.title}
                                message={errorMessage.message}
                                errorCode={errorMessage.errorCode}
                                hasCta={true}
                                ctatext="Try again"
                                onCtaClick={() => {
                                    resetView();
                                    startLoading();

                                    setIsPanelReady(false);
                                    setTimeout(
                                        () => setIsPanelReady(true),
                                        600
                                    );
                                }}
                            />
                        )}

                        {isLoading && !isError && (
                            <>
                                <h1 className="skeleton">Details</h1>
                                <p className="skeleton">
                                    Fetching information...
                                </p>
                                <hr />
                                <TableSkeleton amount={3} />
                            </>
                        )}

                        {!isLoading && story && (
                            <>
                                <StoryblokComponent blok={story.content} />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Workspace;
