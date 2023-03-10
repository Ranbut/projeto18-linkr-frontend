import axios from "axios";

export const putPostEditAPI = async (token, postTextData, hashtagsStored, postId) => {
  const res = {
    success: false,
    error: undefined
  };

  try {

    const body = { message: postTextData + " " + hashtagsStored.join(' ')};

    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };
    
    console.log(hashtagsStored);
    await axios.put(`http://localhost:5000/posts/${postId}`, body, config);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};