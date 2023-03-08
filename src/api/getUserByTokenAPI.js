import axios from "axios";

export const getUserByTokenAPI = async (token) => {
  try {

    const { data: tokenInfo } = await axios.get(`http://localhost:5000/get-user`, token);

    return { success: true, error: undefined, tokenInfo };

  } catch (error) {
    return { success: false, error: error.response.data, tokenInfo: undefined };
  }
};