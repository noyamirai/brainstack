import { useEffect, useState } from "react";
import Logo from "../atoms/Logo";

type Props = {
    isCollapsed: boolean;
};

const Aside: React.FC<Props> = ({ isCollapsed }) => {
    const ASIDE_STORAGE_KEY = "noyamirai_aside_collapsed";

    const [collapsed, setCollapsed] = useState<boolean>(() => {
        const stored = localStorage.getItem(ASIDE_STORAGE_KEY);
        return stored ? stored === "true" : isCollapsed;
    });

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        let width: string;

        if (!collapsed) {
            width = "260px";
        } else if (hovered) {
            width = "calc(1rem + 53px + 1rem + 10px + 1rem + 20px + 1rem)";
        } else {
            width = "calc(1rem + 53px + 1rem + 8px)";
        }

        document.documentElement.style.setProperty("--aside-width", width);
    }, [collapsed, hovered]);

    useEffect(() => {
        localStorage.setItem("aside-collapsed", String(collapsed));
    }, [collapsed]);

    const handleToggleCollapse = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <aside
            className={`js-aside ${collapsed ? "collapsed" : ""} ${
                collapsed && hovered ? "hovered" : ""
            }`}
        >
            <div
                className="top-container"
                onMouseEnter={() => collapsed && setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <a href="/" className="logo-mark">
                    <Logo />
                </a>

                <button
                    className="icon-btn"
                    type="button"
                    aria-label="Collapse aside navigation"
                    onClick={handleToggleCollapse}
                >
                    <svg
                        className={!collapsed ? "" : "hide"}
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 5C0 2.23858 2.23858 0 5 0H14C16.7614 0 19 2.23858 19 5V14C19 16.7614 16.7614 19 14 19H5C2.23858 19 0 16.7614 0 14V5Z"
                            fill="#0D1313"
                        />
                        <path
                            className="stroke-fill"
                            d="M14 17V19H5V17H14ZM17 14V5C17 3.34315 15.6569 2 14 2H5C3.34315 2 2 3.34315 2 5V14C2 15.6569 3.34315 17 5 17V19C2.23858 19 0 16.7614 0 14V5C0 2.23858 2.23858 0 5 0H14C16.7614 0 19 2.23858 19 5V14C19 16.7614 16.7614 19 14 19V17C15.6569 17 17 15.6569 17 14Z"
                            fill="#313642"
                        />
                        <path
                            d="M0 5C0 2.23858 2.23858 0 5 0L8 0V19H5C2.23858 19 0 16.7614 0 14V5Z"
                            fill="#0D1313"
                        />
                        <path
                            className="stroke-fill"
                            d="M0 14V5C0 2.23858 2.23858 0 5 0L8 0V19H5V17H6V2H5C3.34315 2 2 3.34315 2 5V14C2 15.6569 3.34315 17 5 17V19C2.23858 19 0 16.7614 0 14Z"
                            fill="#313642"
                        />
                    </svg>

                    <div className="expand-btn">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </button>
            </div>

            <div className="mid-container"></div>
        </aside>
    );
};

export default Aside;
