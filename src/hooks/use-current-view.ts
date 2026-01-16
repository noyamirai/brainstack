import { useContext } from "react";
import {
    CurrentViewContext,
    CurrentViewContextType,
} from "../contexts/current-view-context";

export const useCurrentView = (): CurrentViewContextType => {
    const context = useContext(CurrentViewContext);

    if (!context) {
        throw new Error(
            "useCurrentView must be used within a CurrentViewProvider"
        );
    }

    return context;
};
