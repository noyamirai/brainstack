import { createContext, useMemo } from "react";
import { useLocation } from "react-router-dom";

export type CurrentViewContextType = {
    currentPath: string;
    currentView: string;
};

type CurrentViewProviderProps = {
    children: React.ReactNode;
};

export const CurrentViewContext = createContext<
    CurrentViewContextType | undefined
>(undefined);

export const CurrentViewProvider: React.FC<CurrentViewProviderProps> = ({
    children,
}) => {
    const location = useLocation();

    const currentView = useMemo(() => {
        // Extract the current view from the pathname
        const pathParts = location.pathname.split("/").filter(Boolean);
        return pathParts.length > 0 ? pathParts[pathParts.length - 1] : "/";
    }, [location.pathname]);

    return (
        <CurrentViewContext.Provider
            value={{
                currentPath: location.pathname,
                currentView: currentView,
            }}
        >
            {children}
        </CurrentViewContext.Provider>
    );
};
