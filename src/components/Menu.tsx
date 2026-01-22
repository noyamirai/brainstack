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
                isDisabled={true}
            />
            <MenuItem
                isActive={false}
                href="/workspace"
                iconClassName="fa-solid fa-cubes"
                label="Workspace"
                isDisabled={true}
            />
            <MenuItem
                isActive={false}
                href="/projects"
                iconClassName="fa-solid fa-folder"
                label="Projects"
                isDisabled={true}
            />
        </ul>
    );
};

export default Menu;
