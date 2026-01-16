export type AppConfig = {
    appName: string;
    shortAppName: string;
    appThemeColor: `#${string}`;
    appVersion: `v${number}.${number}.${number}`;
};

export const APPCONFIG: AppConfig = {
    appName: "BS | noyamirai.nl",
    shortAppName: "BS | noyamirai.nl",
    appThemeColor: "#0D1313",
    appVersion: "v1.0.0",
};
