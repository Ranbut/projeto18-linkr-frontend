import { ImageLink, PreviewBody, TitleLink, DescriptionLink, URLLink, Items} from "./style";
import preview_image from "../../assets/test-preview-image.png"

export default function LinkPreview({ link }){
    return(
        <PreviewBody>
            <Items>
                <TitleLink>Como aplicar o Material UI em um projeto React</TitleLink>
                <DescriptionLink>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</DescriptionLink>
                <URLLink>{link}</URLLink>
            </Items>
            <ImageLink><img src={preview_image} alt="img-link" /></ImageLink>
        </PreviewBody>
    );
}