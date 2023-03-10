import { ImageLink, PreviewBody, TitleLink, DescriptionLink, URLLink, Items, SpacingMarging} from "./style";

export default function LinkPreview({ link }){
    return(
        <PreviewBody>
            <Items>
                <TitleLink>{link.linkTitle}</TitleLink>
                <DescriptionLink>{link.linkDescription}</DescriptionLink>
                <URLLink>{link.link}</URLLink>
                <SpacingMarging />
            </Items>
            <ImageLink><img src={link.linkImage} alt="img-link" /></ImageLink>
        </PreviewBody>
    );
}