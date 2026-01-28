import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrentViewProvider } from "./contexts/current-view-context";
import { useCurrentView } from "./hooks/use-current-view";
import Home from "./views/Home";
import NavHeader from "./components/NavHeader";
import Aside from "./components/Aside";
import Menu from "./components/Menu";
import Stack from "./views/Stack";

const AppLayout: React.FC = () => {
    const { currentPath, currentView } = useCurrentView();

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

    return (
        <div className="App">
            <NavHeader />
            <Aside isCollapsed={false} />

            <section className="menu-wrapper">
                <Menu />
            </section>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stack" element={<Stack />} />
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
