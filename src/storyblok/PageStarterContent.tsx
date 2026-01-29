import { render } from "storyblok-rich-text-react-renderer";

type Props = {
    blok: {
        title?: string;
        body?: any;
        has_hr?: boolean;
    };
};

const PageStarterContent: React.FC<Props> = ({ blok }) => {
    return (
        <>
            {blok.title && <h1>{blok.title}</h1>}

            {blok.body && render(blok.body)}

            {blok.has_hr && <hr />}
        </>
    );
};

export default PageStarterContent;
