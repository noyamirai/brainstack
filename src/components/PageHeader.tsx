import { APPCONFIG } from "../../shared/config";

type Props = {
    headerClassName?: string;
    labelLeft?: string;
    labelRight?: string;
};

const PageHeader: React.FC<Props> = ({
    headerClassName,
    labelLeft,
    labelRight,
}) => {
    const environmentLabel = () => {
        switch (process.env.NODE_ENV) {
            case "development":
                return "dev";
            case "production":
                return "prod";
            case "test":
                return "test";
            default:
                return "unknwn";
        }
    };

    return (
        <section className={`page-header ${headerClassName ?? ""}`}>
            <div className="page-header__meta">
                <p>
                    {labelLeft ??
                        `${APPCONFIG.appName} : : ${environmentLabel()}`}
                </p>
                <p>{labelRight ?? APPCONFIG.appVersion}</p>
            </div>
            <div className="logo-bar"></div>
        </section>
    );
};

export default PageHeader;
