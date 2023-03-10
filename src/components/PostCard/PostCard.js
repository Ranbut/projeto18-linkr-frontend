import { Link } from "react-router-dom";
import LinkPreview from "../LinkPreview/LinkPreview";
import { PostBody, PostInfo, UserAvatar, SpacingMarging } from "./style";
import { AiOutlineHeart } from "react-icons/ai";

export default function PostCard({ userPost }){

    //Aqui pode ser também ajustado para fazer as tags links com parâmetros, selecionando as hashtags
    const parts = userPost.message.split('#');
    const renderedText = parts.map((part, i) => {
      if (i % 2 === 1) {
        return <Link to="" style={{ textDecoration: 'none' }}>
            <span key={i} style={{ color: 'white' }}>{`#${part}`}</span>
        </Link>
      } else {
        return <span key={i}>{part}</span>;
      }
    });
    console.log(userPost, "userPost");

    return(
        <PostBody>
            <UserAvatar>
                <img src={userPost.pictureUrl} alt="user-avatar" />
                <AiOutlineHeart style={{marginLeft: '33px'}} color='white' size= '19px'/>
                <p>0 likes</p>
            </UserAvatar>
            <PostInfo>
                <h6>{userPost.username}</h6>
                <p>{renderedText}</p>
                <Link to={userPost.link} style={{ textDecoration: 'none' }}>
                    <LinkPreview link={userPost}/>
                </Link>
                <SpacingMarging  />
            </PostInfo>
        </PostBody>
    );
}