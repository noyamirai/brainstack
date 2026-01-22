const TimelineItemSkeleton: React.FC = () => {
    return (
        <li className="timeline__item timeline__item--skeleton">
            <span className="timeline__item__year skeleton">Now?</span>
            <div className="timeline__item__indicator">
                <div className="indicator"></div>
            </div>

            <div className="timeline__item__content">
                <div className="timeline__item__content__header">
                    <div>
                        <p className="timeline__item__title skeleton">
                            <strong>Loading...</strong>
                        </p>
                        <p className="timeline__item__subtitle skeleton">
                            Just a second!
                        </p>
                    </div>
                    <div>
                        <p className="status-text online skeleton">Fetching</p>
                        <p className="timeline__item__date skeleton">...</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default TimelineItemSkeleton;
