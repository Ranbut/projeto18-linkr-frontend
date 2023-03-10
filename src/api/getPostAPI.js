import axios from "axios";

export const getPostAPI = async () => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);

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