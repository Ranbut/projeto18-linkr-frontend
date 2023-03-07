
import { Link } from "react-router-dom";
import LinkPreview from "../LinkPreview/LinkPreview";
import { PostBody, PostInfo, UserAvatar, SpacingMarging } from "./style";

export default function PostCard({ userName, userAvatar, userPost }){

    return(
        <PostBody>
            <UserAvatar><img src={userAvatar} alt="user-avatar" /></UserAvatar>
            <PostInfo>
                <h6>{userName}</h6>
                <p>{userPost.text}</p>
                <Link to={userPost.linkShared} style={{ textDecoration: 'none' }}>
                    <LinkPreview link={userPost.linkShared}/>
                </Link>
                <SpacingMarging  />
            </PostInfo>
        </PostBody>
    );
}