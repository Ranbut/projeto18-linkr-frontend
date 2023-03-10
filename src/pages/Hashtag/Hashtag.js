import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import { PublicationPageBody, Body, Loading, TrendingBox, TrendingTitle, Hashtag } from "../Timeline/style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import { AuthContext } from "../../contexts/auth.js";
import { UserContext } from "../../contexts/user.js";
import { useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

export default function HashtagSearch() {

    const { token, setToken } = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    const { user } = useContext(UserContext);
    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const { hashtag } = useParams();
    const navigate = useNavigate();

    function renderTimeline() {
        if (posts.length > 0) {
            return (
                <>
                    {posts.map(
                        (e) => <PostCard userPost={e} key={e.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading>There are no posts yet</Loading>);
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`)
            .then((res) => {
                setLoad(false);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        axios.get(`${process.env.REACT_APP_API_URL}/trending`)
            .then((res) => {
                setTrending(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [hashtag]);

    return (
        <Body>
            <Header userImage={user.pictureUrl} token={token} setToken={setToken} />
            <PublicationPageBody>
                <div>
                    <h4>{'#'}{hashtag}</h4>
                    {load ? (<Loading>Loading...</Loading>) : renderTimeline()}
                </div>
                <TrendingBox>
                    <TrendingTitle>trending</TrendingTitle>
                    <div>
                        {trending.map(e =>
                            <Hashtag
                                key={e.hashtag}
                                onClick={() =>
                                    navigate(`/hashtag/${e.hashtag.replace("#", "")}`)}
                            >
                                {e.hashtag}
                            </Hashtag>
                        )}
                    </div>
                </TrendingBox>
            </PublicationPageBody>

        </Body>
    );
}