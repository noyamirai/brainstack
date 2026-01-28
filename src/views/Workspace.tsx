import { useState } from "react";
import PageHeader from "../components/PageHeader";
import TableSkeleton from "../components/TableSkeleton";

const Workspace: React.FC = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => {
        setIsPanelOpen((prev) => !prev);

        // toggle on body as well
        document.body.classList.toggle("push-modal--open", !isPanelOpen);
    };

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
                                <p>List of products from my current setup</p>
                            </div>
                            <button
                                type="button"
                                className="workspace-item__info__btn"
                                onClick={togglePanel}
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
                                onClick={togglePanel}
                            >
                                <i className="fa-solid fa-chevron-right"></i>

                                <span>PC Anatomy</span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <section className="page-modal">
                <div className="page-modal__content">
                    <div className="container">
                        <PageHeader labelLeft="Workspace : : details" />

                        <button
                            type="button"
                            className="page-modal__btn"
                            onClick={togglePanel}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                        <h2>Details</h2>
                        <p>Some text here</p>

                        <hr />

                        {/* <div className="table-wrapper">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Desk</td>
                                        <td>from Ikea</td>
                                    </tr>
                                    <tr>
                                        <td>Vertical monitor</td>
                                        <td>AOC Curved</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div> */}

                        <TableSkeleton amount={3} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Workspace;
