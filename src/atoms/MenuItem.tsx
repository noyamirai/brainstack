import { Link } from "react-router-dom";
import { useCurrentView } from "../hooks/use-current-view";

type Props = {
    href?: string;
    iconClassName: `fa-${string} fa-${string}`;
    label: string;
    isDisabled?: boolean;
    className?: string;
};

const MenuItem: React.FC<Props> = ({
    href = "#",
    iconClassName,
    label,
    isDisabled,
    className,
}) => {
    if (isDisabled) {
        return (
            <li className="menu__item menu__item--disabled">
                <i className={iconClassName}></i>
                <span>{label}</span>
            </li>
        );
    }

    const { currentPath } = useCurrentView();
    const isActive = currentPath === href;

    const classNames = ["menu__item", isActive ? "active" : "", className]
        .filter(Boolean)
        .join(" ");

    return (
        <li className={classNames}>
            <Link to={href}>
                <i className={iconClassName}></i>
                <span>{label}</span>
            </Link>
        </li>
    );
};

export default MenuItem;
