import axios from "axios";

export const pushPostAPI = async (postFormData) => {
  const res = {
    success: false,
    error: undefined
  };

  try {
    await axios.post(`http://localhost:5000/posts`, postFormData);

    res.success = true;
    return res;

  } catch (error) {
    res.error = error.response.data;
    return res;
  }
};