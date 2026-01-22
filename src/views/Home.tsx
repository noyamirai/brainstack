import PageHeader from "../components/PageHeader";

const Home: React.FC = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="content">
                    <PageHeader labelLeft="Home : : Introduction" />
                    <h1>Hi there! :)</h1>
                    <p>
                        I guess you're here to read about who I am and what I
                        do. You've come to the perfect place, as I have created
                        this space to host my brain on the web! A digital
                        journal if you will... Explore this space, and delve a
                        little deeper into my BS...
                    </p>
                    <p>
                        But fine, I'll also give you one of those classic
                        portfolio one-liners as well. You know, the ones that
                        kind of describe you but never quite enough.
                    </p>

                    <hr />

                    <div className="highlight-block">
                        <p>
                            I am a 27 year old <s>nerd</s> full-stack web
                            developer and UI designer who enjoys playing video
                            games and watching movies with friends.
                        </p>
                    </div>

                    <hr />

                    <h2>Lore recap</h2>
                    <p>
                        Of course, we can't forget the CV-like timeline of what
                        I have been up to in life. Don't worry, details excluded
                        unless you're super interested.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
