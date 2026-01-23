import { useEffect, useRef, useState } from "react";

type Props = {
    year: string;
    title: string;
    subtitle: string;
    status: string;
    period: string;
    description: string;
};

const statusColors: Record<string, string> = {
    employed: "online",
    project: "",
    intern: "",
    achievement: "warning",
};

const TimelineItem: React.FC<Props> = ({
    year,
    title,
    subtitle,
    status,
    period,
    description,
}) => {
    if (!description) {
        return (
            <li className="timeline__item">
                {year && <span className="timeline__item__year">{year}</span>}
                <div className="timeline__item__indicator">
                    <div className="indicator"></div>
                </div>

                <div className="timeline__item__content">
                    <div className="timeline__item__content__header">
                        <div>
                            <p className="timeline__item__title">
                                <strong>{title}</strong>
                            </p>
                            {subtitle && (
                                <p className="timeline__item__subtitle">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                        <div>
                            <p
                                className={`status-text ${statusColors[status] || ""}`}
                            >
                                {status}
                            </p>
                            {period && (
                                <p className="timeline__item__date">{period}</p>
                            )}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const descriptionRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            setHeight(descriptionRef.current.scrollHeight);
        }
    }, [description]);

    return (
        <li className={`timeline__item ${isOpen ? "open" : ""}`}>
            {year && <span className="timeline__item__year">{year}</span>}
            <div className="timeline__item__indicator">
                <div className="indicator"></div>
            </div>

            <div className="timeline__item__wrapper">
                <div className="timeline__item__content">
                    <div className="timeline__item__content__header">
                        <div>
                            <p className="timeline__item__title">
                                <strong>{title}</strong>
                            </p>

                            {subtitle && (
                                <p className="timeline__item__subtitle">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                        <div>
                            <p
                                className={`status-text ${statusColors[status] || ""}`}
                            >
                                {status}
                            </p>
                            {period && (
                                <p className="timeline__item__date">{period}</p>
                            )}
                        </div>
                    </div>
                    <div
                        className="timeline__item__content__description"
                        style={{
                            height: isOpen ? height : 0,
                        }}
                    >
                        <div ref={descriptionRef}>{description}</div>
                    </div>
                </div>
                <button
                    type="button"
                    className="timeline__item__btn"
                    onClick={toggleOpen}
                    aria-expanded={isOpen}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </li>
    );
};

export default TimelineItem;
