// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import React from "react";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./storyblok/Page";
import PageStarterContent from "./storyblok/PageStarterContent";
import RichTextContent from "./storyblok/RichTextContent";
import HighlightTextBlock from "./storyblok/HighlightTextBlock";

storyblokInit({
    accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
    use: [apiPlugin],
    apiOptions: {
        region: "eu", // Choose the correct region from your Space.
    },
    components: {
        page: Page,
        page_starter_content: PageStarterContent,
        rich_text_content: RichTextContent,
        highlight_text_block: HighlightTextBlock,
    },
});

// Main entry point for the React application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
