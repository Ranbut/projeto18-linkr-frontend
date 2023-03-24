import axios from "axios";

export const getPostAPI = async (user) => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};

export const getPostRecentsAPI = async (id) => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts/recents/${id}`);

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};

export const getPostUserAPI = async (id) => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};