type Props = {
    icon: React.ReactNode;
    label: string;
    className?: string;
    tagLabel?: string;
};

const StackItem: React.FC<Props> = ({ icon, label, className, tagLabel }) => {
    return (
        <li className={`card card--stack ${className ? className : ""}`}>
            {tagLabel && <div className="tag">{tagLabel}</div>}
            <div className="card__icon">{icon}</div>
            <span className="card__subtext">{label}</span>
        </li>
    );
};

export default StackItem;
