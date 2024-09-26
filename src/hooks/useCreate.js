import { postData } from "../utils/api";

const useCreate = () => {
  const createUser = async (url, body) => {
    try {
      const response = await postData(url, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  return { createUser };
};

export default useCreate;
