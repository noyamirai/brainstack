import { useState, useRef, useEffect } from "react";
import Logo from "../atoms/Logo";
import { useCurrentView } from "../hooks/use-current-view";

const NavHeader: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const { currentView } = useCurrentView();

    // const mainViews = ["/", "home"];
    // const isMoreActive = !mainViews.includes(currentView);

    const toggleMenu = () => {
        setMenuIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    // Toggle correct class on body
    useEffect(() => {
        if (menuIsOpen) {
            document.body.classList.add("menu-is-open");
        } else {
            document.body.classList.remove("menu-is-open");
        }
    }, [menuIsOpen]);

    // Handle outside click to close menu
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                menuIsOpen &&
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                closeMenu();
            }
        };

        if (menuIsOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuIsOpen]);

    useEffect(() => {
        if (menuIsOpen) {
            setMenuIsOpen(false);
        }
    }, [currentView]);

    return (
        <header className="nav-header">
            <div className="nav-header__item">
                <a href="/" className="logo-mark">
                    <Logo />
                </a>
            </div>

            <div className="nav-header__item nav-header__item--menu">
                <button type="button" className="btn" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars" />
                </button>
            </div>
        </header>
    );
};

export default NavHeader;
