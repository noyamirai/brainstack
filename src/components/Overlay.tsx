// import { FontAwesomeIcon } from "../models/api";

export type OverlayProps = {
    title?: string;
    subtitle?: string;

    overlayClass?: string;

    hasCta?: boolean;
    ctaLabel?: string;
    onCtaClick?: () => void;

    buttonClass?: string;

    hasIcon?: boolean;
    iconClass?: `fa-${string} fa-${string}`;

    extraContent?: React.ReactNode;

    children?: React.ReactNode;
};

const Overlay: React.FC<OverlayProps> = ({
    title,
    subtitle,
    overlayClass,
    hasCta,
    ctaLabel,
    onCtaClick,
    buttonClass,
    hasIcon,
    iconClass,
    children,
    extraContent,
}) => {
    return (
        <div className={`overlay ${overlayClass || ""}`}>
            {children ? (
                children
            ) : (
                <>
                    <div className="overlay__content">
                        {hasIcon && iconClass && <i className={iconClass}></i>}
                        {title && <h1 className="title">{title}</h1>}
                        <p>{subtitle}</p>
                    </div>

                    <div className="overlay__actions">
                        {hasCta && (
                            <button
                                className={`btn ${buttonClass || ""}`}
                                onClick={onCtaClick}
                            >
                                {ctaLabel}
                            </button>
                        )}
                        {extraContent && extraContent}
                    </div>
                </>
            )}
        </div>
    );
};

export default Overlay;
