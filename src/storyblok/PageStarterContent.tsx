import { render } from "storyblok-rich-text-react-renderer";

type Props = {
    blok: {
        title?: string;
        body?: any;
    };
};

const PageStarterContent: React.FC<Props> = ({ blok }) => {
    return (
        <>
            {blok.title && <h1>{blok.title}</h1>}

            {blok.body && render(blok.body)}
        </>
    );
};

export default PageStarterContent;
