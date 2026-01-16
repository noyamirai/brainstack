import Aside from "../components/Aside";

const Home: React.FC = () => {
    return (
        <div className="main">
            <Aside isCollapsed={false} />
        </div>
    );
};

export default Home;
