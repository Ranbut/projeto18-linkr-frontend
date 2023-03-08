import { ImageLink, PreviewBody, TitleLink, DescriptionLink, URLLink, Items} from "./style";
import preview_image from "../../assets/test-preview-image.png"

export default function LinkPreview({ link }){
    return(
        <PreviewBody>
            <Items>
                <TitleLink>{link.linkTitle}</TitleLink>
                <DescriptionLink>{link.linkDescription}</DescriptionLink>
                <URLLink>{link.link}</URLLink>
            </Items>
            <ImageLink><img src={link.linkImage} alt="img-link" /></ImageLink>
        </PreviewBody>
    );
}