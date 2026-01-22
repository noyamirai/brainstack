import MenuItem from "../atoms/MenuItem";

const Menu: React.FC = () => {
    return (
        <ul className="menu">
            <MenuItem
                isActive={true}
                href="/"
                iconClassName="fa-solid fa-home"
                label="Home"
            />
            <MenuItem
                isActive={false}
                href="/stack"
                iconClassName="fa-solid fa-cubes"
                label="Stack"
            />
            <MenuItem
                isActive={false}
                href="/workspace"
                iconClassName="fa-solid fa-cubes"
                label="Workspace"
            />
            <MenuItem
                isActive={false}
                href="/projects"
                iconClassName="fa-solid fa-folder"
                label="Projects"
            />
        </ul>
    );
};

export default Menu;
