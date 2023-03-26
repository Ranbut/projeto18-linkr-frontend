import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header/Header.js";
import { getPostUserAPI } from "../../api/getPostAPI.js";
import { PageBody, Loading, TrendingBox, TrendingTitle, Hashtag, UserInfo } from "./style.js";
import PostCard from "../../components/PostCard/PostCard.js";
import axios from "axios";
import Context from "../../contexts/auth.js";
import { useNavigate, useParams } from "react-router";

export default function UserPage() {
    const { id } = useParams();

    const { user, } = useContext(Context);
    const [load, setLoad] = useState(true);
    const [userPosts, setUserPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const navigate = useNavigate();
    const [follow, setFollow] = useState([])

    function getPosts() {
        //console.log(id,"chamar",typeof id)

        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)

            .then((res) => {
                setUserPosts(res.data);
                setLoad(false);

            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }


    function renderTimeline() {
        if (userPosts.length > 0) {
            return (
                <>
                    {userPosts.map(
                        (postProp) => <PostCard currentUser={0} userPost={postProp} key={postProp.id} />
                    )}
                </>
            );
        }
        else {
            return (<Loading data-test="message">You don't follow anyone yet. Search for new friends!</Loading>);
        }
    }

    function toggleFollow() {


        axios.post(`${process.env.REACT_APP_API_URL}/follow/${id}`, {}, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })
            .then((res) => {
                console.log(res);

            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }


    useEffect(() => {
        getPosts();
        axios.get(`${process.env.REACT_APP_API_URL}/user/${id}/post`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        })

        axios.get(`${process.env.REACT_APP_API_URL}/trending`)
            .then((res) => {
                setTrending(res.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }, [id]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/followers`, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }).then((res) => {
          setFollow(res.data)
          console.log(res.data);
        }).catch((err) => {
            console.log(err.response.data);
        })
    }, [follow]);

    return (
        <>
            <Header />
            <button data-test="follow-btn" onClick={toggleFollow}> {
                follow.includes(+id) ? "UnFollow"
                    :
                    "Follow"}


            </button>
            <PageBody>
                <div>

                    <UserInfo>
                        <img src={user.pictureUrl} alt="user-avatar" />
                        <h4>{user.username}</h4>
                    </UserInfo>
                    {load ? (<Loading>Loading...</Loading>) : renderTimeline()}
                </div>
                <TrendingBox>
                    <TrendingTitle data-test="trending">trending</TrendingTitle>
                    <div>
                        {trending.map(e =>
                            <Hashtag data-test="hashtag"
                                key={e.hashtag}
                                onClick={() =>
                                    navigate(`/hashtag/${e.hashtag.replace("#", "")}`)}
                            >
                                {e.hashtag}
                            </Hashtag>
                        )}
                    </div>

                </TrendingBox>
            </PageBody>
        </>
    );
}