import { render } from "storyblok-rich-text-react-renderer";

type Props = {
    blok: {
        content?: any;
    };
};

const HighlightTextBlock: React.FC<Props> = ({ blok }) => {
    return (
        <>
            <hr />
            <div className="highlight-block">{render(blok.content)}</div>
            <hr />
        </>
    );
};

export default HighlightTextBlock;
