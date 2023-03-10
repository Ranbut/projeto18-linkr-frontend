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

export const getUserByIdAPI = async (id) => {
  try {
    console.log(`${process.env.REACT_APP_API_URL}/get-user/${id}`);

    const { data: userRetrived } = await axios.get(`${process.env.REACT_APP_API_URL}/get-user/${id}`);

    return { success: true, error: undefined, userRetrived };

  } catch (error) {
    return { success: false, error: error.response.data, userRetrived: undefined };
  }
};