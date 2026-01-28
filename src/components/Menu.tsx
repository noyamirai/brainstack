import MenuItem from "../atoms/MenuItem";

const Menu: React.FC = () => {
    return (
        <ul className="menu">
            <MenuItem href="/" iconClassName="fa-solid fa-home" label="Home" />
            <MenuItem
                href="/stack"
                iconClassName="fa-solid fa-cubes"
                label="Stack"
                className="new"
            />
            <MenuItem
                href="/workspace"
                iconClassName="fa-solid fa-cubes"
                label="Workspace"
                className="new"
            />
            <MenuItem
                href="/projects"
                iconClassName="fa-solid fa-folder"
                label="Projects"
                isDisabled={true}
            />
        </ul>
    );
};

export default Menu;
