import { useEffect, useState } from "react";
import Logo from "../atoms/Logo";
import Menu from "./Menu";

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
            width = "320px";
        } else if (hovered) {
            width = "calc(1.5rem + 50px + 1.5rem + 10px + 1rem + 20px + 1rem)";
        } else {
            width = "calc(1.5rem + 50px + 1.5rem + 0px)";
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

                <div className="top-container__title">
                    <div>
                        <h4>Welcome to my BS</h4>
                        <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.44634 8.48658L1.2721 7.6059C1.14756 7.51694 1.07639 7.3924 1.0586 7.23228C1.04081 7.05436 1.06749 6.91203 1.13866 6.80528C1.13866 6.78749 1.19204 6.72522 1.29879 6.61847L3.22028 4.8571L0.604914 4.56354C0.533748 4.54575 0.480373 4.53685 0.44479 4.53685C0.426998 4.51906 0.409206 4.51017 0.391415 4.51017C0.266874 4.47458 0.160124 4.38563 0.0711663 4.24329C0 4.08317 -0.0177916 3.92304 0.0177916 3.76292L0.498164 2.34849C0.533747 2.20616 0.631601 2.09941 0.791726 2.02824C0.95185 1.95707 1.09418 1.93928 1.21872 1.97487C1.23652 1.97487 1.30768 2.01045 1.43222 2.08162L3.72734 3.3893L3.19359 0.800621C3.1758 0.729454 3.1669 0.684975 3.1669 0.667184C3.1669 0.631601 3.1669 0.604914 3.1669 0.587123C3.1669 0.44479 3.22028 0.311352 3.32703 0.186811C3.45157 0.0622703 3.5939 0 3.75402 0H5.22183C5.38195 0 5.51539 0.0622703 5.62214 0.186811C5.74668 0.311352 5.80895 0.44479 5.80895 0.587123C5.80895 0.604914 5.80895 0.631601 5.80895 0.667184C5.80895 0.684975 5.80006 0.729454 5.78227 0.800621L5.24852 3.3893L7.57032 2.08162C7.69486 2.01045 7.76603 1.97487 7.78382 1.97487C7.92615 1.93928 8.06848 1.95707 8.21082 2.02824C8.37094 2.09941 8.46879 2.20616 8.50438 2.34849L8.98475 3.76292C9.02033 3.92304 8.99365 4.08317 8.90469 4.24329C8.83352 4.38563 8.72677 4.47458 8.58444 4.51017C8.56665 4.51017 8.53996 4.51906 8.50438 4.53685C8.48659 4.53685 8.451 4.54575 8.39763 4.56354L5.75558 4.8571L7.70376 6.61847C7.81051 6.72522 7.86388 6.78749 7.86388 6.80528C7.95284 6.91203 7.98842 7.05436 7.97063 7.23228C7.95284 7.3924 7.87278 7.51694 7.73044 7.6059L6.5562 8.48658C6.41387 8.55775 6.26264 8.58444 6.10251 8.56665C5.94239 8.54886 5.81785 8.47769 5.72889 8.35315C5.72889 8.33536 5.71999 8.31757 5.7022 8.29977C5.68441 8.28198 5.65772 8.2375 5.62214 8.16634L4.50127 5.73779L3.3804 8.16634C3.36261 8.2375 3.33592 8.28198 3.30034 8.29977C3.28255 8.31757 3.27365 8.33536 3.27365 8.35315C3.20249 8.47769 3.07794 8.54886 2.90003 8.56665C2.7399 8.58444 2.58868 8.55775 2.44634 8.48658Z"
                                fill="#8991A4"
                            />
                        </svg>
                    </div>
                    <p className="">* Brain Stack or Bullshit</p>
                </div>

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

            <div className="mid-container">
                <nav className="menu-wrapper">
                    <Menu />
                </nav>
            </div>
        </aside>
    );
};

export default Aside;
