import { APPCONFIG } from "../../shared/config";

type Props = {
    headerClassName?: string;
};

const Header: React.FC<Props> = ({ headerClassName }) => {
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
        <header className={`header ${headerClassName ?? ""}`}>
            <div className="logo-bar"></div>

            <div className="header__meta">
                <p>
                    {APPCONFIG.appName} : : {environmentLabel()}
                </p>
                <p>{APPCONFIG.appVersion}</p>
            </div>
        </header>
    );
};

export default Header;
