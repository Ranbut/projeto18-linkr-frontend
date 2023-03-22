import axios from "axios";

export const putPostEditAPI = async (token, postTextData, postId) => {
  const res = {
    success: false,
    error: undefined
  };

  try {

    const body = { message: postTextData };

    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };
    
    await axios.put(`${process.env.REACT_APP_API_URL}/posts/${postId}`, body, config);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};