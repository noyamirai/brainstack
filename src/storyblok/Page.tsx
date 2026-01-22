import { StoryblokComponent } from "@storyblok/react";

type Props = {
    blok: any;
};

const Page: React.FC<Props> = ({ blok }) => {
    return (
        <>
            {blok.body?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </>
    );
};

export default Page;
