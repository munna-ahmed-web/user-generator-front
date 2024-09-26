import axios from "axios";

export const getData = (url) => {
  try {
    const response = axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postData = (url, body) => {
  try {
    const response = axios.post(url, body);
    return response;
  } catch (error) {
    throw error;
  }
};
