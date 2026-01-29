import { getStoryblokApi, StoryblokComponent } from "@storyblok/react";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import usePerceivedLoading from "../hooks/use-perceived-loading";
import TimelineItemSkeleton from "../atoms/TimelineItemSkeleton";
import SystemErrorMessage from "../components/SystemErrorMessage";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    const [story, setStory] = useState<any>(null);
    const [isContentLoading, setIsContentLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const isLoading = usePerceivedLoading(isContentLoading, isError, 600);

    useEffect(() => {
        const api = getStoryblokApi();

        api.get("cdn/stories/timeline", {
            version: "draft",
        })
            .then((res) => {
                setStory(res.data.story);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsContentLoading(false));
    }, []);

    return (
        <div className="main">
            <div className="container">
                <div className="content">
                    <PageHeader labelLeft="Home : : Introduction" />
                    <h1>Hi there! :)</h1>

                    <p>
                        I guess you're here to read about who I am and what I
                        do. You've come to the perfect place, as I have created
                        this space to host my brain on the web! A digital
                        journal if you will... Explore this space, and delve a
                        little deeper into my BS...
                    </p>

                    <p>
                        But fine, I'll give you one of those classic portfolio
                        one-liners as well. You know, the ones that kind of
                        describe you but never quite enough.
                    </p>

                    <hr />

                    <div className="highlight-block">
                        <p>
                            I am a 27 year old <s>nerd</s> full-stack web
                            developer and UI designer who enjoys playing video
                            games and watching movies with friends.
                        </p>
                    </div>

                    <hr />

                    <h2>Lore recap</h2>
                    <p>
                        Of course, we can't forget the CV-like timeline of what
                        I have been up to in life. Don't worry, details excluded
                        unless you're super interested.
                    </p>

                    {isError && (
                        <>
                            <hr />
                            <SystemErrorMessage
                                title="Unable to load lore"
                                message="Maybe it is struggling to compile all those life events"
                                errorCode="TIMELINE_LOAD_ERR"
                                hasCta={true}
                                ctatext="Try again"
                                onCtaClick={() => {
                                    window.location.reload();
                                }}
                            />
                        </>
                    )}

                    <ol className="timeline">
                        {isLoading &&
                            !isError &&
                            Array.from({ length: 4 }).map((_, index) => (
                                <TimelineItemSkeleton key={index} />
                            ))}

                        {!isLoading && story && (
                            <>
                                <StoryblokComponent blok={story.content} />
                            </>
                        )}
                    </ol>

                    {!isLoading && story && (
                        <>
                            <hr />

                            <p className="ta-center">
                                Thanks for reading this far! Feel free to check
                                out these other pages:
                            </p>

                            <div className="link-container">
                                <Link to="/stack" className="link tt-up">
                                    Stack
                                </Link>
                                <Link to="/workspace" className="link tt-up">
                                    Workspace
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
