const TextSkeleton: React.FC = () => {
    return (
        <div className="content-skeleton">
            <div>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
            </div>
            <div>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
            </div>
            <div>
                <span className="skeleton"></span>
                <span className="skeleton"></span>
            </div>
        </div>
    );
};

export default TextSkeleton;
