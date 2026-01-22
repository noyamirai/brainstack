import { render } from "storyblok-rich-text-react-renderer";
import TimelineItem from "../atoms/TimelineItem";

type Props = {
    blok: {
        title?: string;
        subtitle?: string;
        status?: string;
        period?: string;
        year?: string;
        description?: any;
    };
};

const TimelineItemBlok: React.FC<Props> = ({ blok }) => {
    return (
        <>
            <TimelineItem
                year={blok.year || ""}
                title={blok.title || ""}
                subtitle={blok.subtitle || ""}
                status={blok.status || ""}
                period={blok.period || ""}
                description={blok.description ? render(blok.description) : ""}
            />
        </>
    );
};

export default TimelineItemBlok;
