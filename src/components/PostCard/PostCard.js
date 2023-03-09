import { Link } from "react-router-dom";
import LinkPreview from "../LinkPreview/LinkPreview";
import { PostBody, PostInfo, UserAvatar, SpacingMarging } from "./style";

export default function PostCard({ userPost }){
    return(
        <PostBody>
            <UserAvatar><img src={userPost.pictureUrl} alt="user-avatar" /></UserAvatar>
            <PostInfo>
                <h6>{userPost.username}</h6>
                <p>{userPost.message}</p>
                <Link to={userPost.link} style={{ textDecoration: 'none' }}>
                    <LinkPreview link={userPost}/>
                </Link>
                <SpacingMarging  />
            </PostInfo>
        </PostBody>
    );
}