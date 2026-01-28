type Props = {
    icon: React.ReactNode;
    label: string;
    className?: string;
    tagLabel?: string;
    tagColor?: string;
};

const StackItem: React.FC<Props> = ({
    icon,
    label,
    className,
    tagLabel,
    tagColor,
}) => {
    return (
        <li className={`card card--stack ${className ? className : ""}`}>
            {tagLabel && (
                <div className={`tag ${tagColor ? tagColor : ""}`}>
                    {tagLabel}
                </div>
            )}
            <div className="card__icon">{icon}</div>
            <span className="card__subtext">{label}</span>
        </li>
    );
};

export default StackItem;
