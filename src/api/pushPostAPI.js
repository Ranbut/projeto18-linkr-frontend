import axios from "axios";

export const pushPostAPI = async (token ,postFormData) => {
  const res = {
    success: false,
    error: undefined
  };

  try {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token
      }
    };

    await axios.post(`http://localhost:5000/posts`, postFormData, config);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};