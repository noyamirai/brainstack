type Props = {
    icon: React.ReactNode;
    label: string;
};

const StackItem: React.FC<Props> = ({ icon, label }) => {
    return (
        <li className="card card--stack">
            <div className="card__icon">{icon}</div>

            <span className="card__subtext">{label}</span>
        </li>
    );
};

export default StackItem;
