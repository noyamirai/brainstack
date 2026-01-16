type Props = {
    className?: string;
};

const Loader: React.FC<Props> = ({ className }) => {
    return (
        <div className={`loader ${className || ""}`}>
            <i className="fa-solid fa-spinner"></i>
        </div>
    );
};

export default Loader;
