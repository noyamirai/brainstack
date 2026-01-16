export type SystemMessageProps = {
    title: string;
    message: string;
    errorCode: string;
};

type Props = SystemMessageProps & {
    hasCta?: boolean;
    ctatext?: string;
    onCtaClick?: () => void;

    extraButtons?: React.ReactNode;
};

const SystemErrorMessage: React.FC<Props> = ({
    title,
    message,
    errorCode,
    hasCta = false,
    ctatext,
    onCtaClick,
    extraButtons,
}) => {
    return (
        <div className="container system-message-container bt">
            <div className="message">
                <div className="message__content">
                    <div className="message__heading">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        <h2 className="heading">{title}</h2>
                    </div>

                    <p className="subtitle">{message}</p>

                    <p>
                        <small>{errorCode}</small>
                    </p>
                </div>

                {hasCta && ctatext && onCtaClick && (
                    <div className="message__cta">
                        <button className="btn btn--ghost" onClick={onCtaClick}>
                            {ctatext}
                        </button>
                    </div>
                )}
                {extraButtons && extraButtons}
            </div>
        </div>
    );
};

export default SystemErrorMessage;
