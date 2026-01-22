import { render } from "storyblok-rich-text-react-renderer";

type Props = {
    blok: {
        content?: any;
    };
};

const RichTextContent: React.FC<Props> = ({ blok }) => {
    return <>{blok.content && render(blok.content)}</>;
};

export default RichTextContent;
