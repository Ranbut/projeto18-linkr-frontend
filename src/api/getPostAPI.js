import axios from "axios";

export const getPostAPI = async () => {
  try {
    const { data: postsRetrived } = await axios.get(`http://localhost:5000/posts`);

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};