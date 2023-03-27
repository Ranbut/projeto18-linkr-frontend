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

export const getPostRecentsAPI = async (user, createdAt) => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts/recents/${createdAt}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};

export const getPostOldAPI = async (user, createdAt) => {
  try {
    const { data: postsRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/posts/old/${createdAt}`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });

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

export const getUserPostOldAPI = async (id, createdAt) => {
  try {
    const { data: postsRetrived } = await axios.get(`
      ${process.env.REACT_APP_API_URL}/posts/${id}/old/${createdAt}`);

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};

export const getHashtagPostOldAPI = async (hashtag, createdAt) => {
  console.log(hashtag, createdAt)
  try {
    const { data: postsRetrived } = await axios.get(`
      ${process.env.REACT_APP_API_URL}/posts/${hashtag}/old/hashtag/${createdAt}`);

    return { success: true, error: undefined, postsRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, postsRetrived: undefined };
  }
};