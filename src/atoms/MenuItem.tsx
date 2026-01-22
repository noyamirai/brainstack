type Props = {
    isActive?: boolean;
    href?: string;
    iconClassName: `fa-${string} fa-${string}`;
    label: string;
};

const MenuItem: React.FC<Props> = ({
    isActive,
    href = "#",
    iconClassName,
    label,
}) => {
    return (
        <li className={`menu__item ${isActive ? "active" : ""}`}>
            <a href={href}>
                <i className={iconClassName}></i>
                <span>{label}</span>
            </a>
        </li>
    );
};

export default MenuItem;
