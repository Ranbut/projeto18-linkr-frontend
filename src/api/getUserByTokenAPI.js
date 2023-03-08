import axios from "axios";

export const getUserByTokenAPI = async (tokenData) => {

  try {
    const objSend = { "token": tokenData };

    const { data: userInfo } = await axios.post(`http://localhost:5000/get-user`, objSend);

    return { success: true, error: undefined, userInfo };

  } catch (error) {
    return { success: false, error: error.response.data, userInfo: undefined };
  }
};