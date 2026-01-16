import Logo from "../atoms/Logo";

const NavHeader: React.FC = () => {
    return (
        <header className="nav-header">
            <div className="nav-header__item">
                <a href="/" className="logo-mark">
                    <Logo />
                </a>
            </div>

            <div className="nav-header__item nav-header__item--menu">
                <button type="button" className="btn">
                    <i className="fa-solid fa-bars" />
                </button>
            </div>
        </header>
    );
};

export default NavHeader;
