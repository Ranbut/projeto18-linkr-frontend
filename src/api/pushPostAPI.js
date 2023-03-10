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

    await axios.post(`${process.env.REACT_APP_API_URL}/posts`, postFormData, config);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};