import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrentViewProvider } from "./contexts/current-view-context";
import { useCurrentView } from "./hooks/use-current-view";
import Home from "./views/Home";

const AppLayout: React.FC = () => {
    const tabBarRoutes = ["/"];

    const { currentPath, currentView } = useCurrentView();
    const showTabBar = tabBarRoutes.includes(currentPath);

    useEffect(() => {
        // Generate class based on the current path
        const bodyClass =
            currentView === "/" ? "home-page" : `${currentView}-page`;

        // Add the class to the body
        document.body.classList.add(bodyClass);

        // Cleanup: remove previous class on path change
        return () => {
            document.body.classList.remove(bodyClass);
        };
    }, [currentPath]);

    useEffect(() => {
        if (!showTabBar) {
            document.body.classList.remove("menu-is-open");
        }
    }, [showTabBar]);

    return (
        <div className="App">
            {/* {showTabBar && <CompactTabBar />} */}

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

// Main component that sets up routing and navigation
const App: React.FC = () => {
    return (
        <Router>
            <CurrentViewProvider>
                <AppLayout />
            </CurrentViewProvider>
        </Router>
    );
};

export default App;
