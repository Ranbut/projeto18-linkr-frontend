import axios from "axios";

export const getUserByTokenAPI = async (tokenData) => {

  try {
    const objSend = { "token": tokenData };

    const { data: userInfo } = await axios.post(`${process.env.REACT_APP_API_URL}/get-user`, objSend);

    return { success: true, error: undefined, userInfo };

  } catch (error) {
    return { success: false, error: error.response.data, userInfo: undefined };
  }
};