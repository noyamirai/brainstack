/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly VITE_APP_ENVIRONMENT?: "dev" | "prod" | "test";
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
}
