type Props = {
    isActive?: boolean;
    href?: string;
    iconClassName: `fa-${string} fa-${string}`;
    label: string;
    isDisabled?: boolean;
};

const MenuItem: React.FC<Props> = ({
    isActive,
    href = "#",
    iconClassName,
    label,
    isDisabled,
}) => {
    if (isDisabled) {
        return (
            <li className="menu__item menu__item--disabled">
                <i className={iconClassName}></i>
                <span>{label}</span>
            </li>
        );
    }

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
