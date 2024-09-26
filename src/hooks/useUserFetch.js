import { useState } from "react";
import { getData } from "../utils/api";
const initialState = {
  users: [],
  loading: false,
  errorMessage: "",
  page: "",
  total: "",
};

const useUserFetch = () => {
  const [usersState, setUsersState] = useState(initialState);
  const fetchUsers = async (url) => {
    try {
      setUsersState((prev) => {
        return {
          ...prev,
          loading: true,
        };
      });
      const response = await getData(url);
      setUsersState((prev) => {
        return {
          ...prev,
          loading: false,
          errorMessage: "",
        };
      });
      return response.data;
    } catch (error) {
      setUsersState((prev) => {
        return {
          ...prev,
          loading: false,
          errorMessage: "Something went wrong while receiving info. Try again!",
        };
      });
    }
  };

  const fetcMoreUsers = async (url) => {
    try {
      setUsersState((prev) => {
        return {
          ...prev,
          loading: true,
        };
      });
      const response = await getData(url);
      console.log("checking res", response.data.data);
      setUsersState((prev) => {
        return {
          ...prev,
          loading: false,
          errorMessage: "",
          users: response.data.data
            ? [...prev.users, ...response.data.data]
            : [...prev.users],
          page: response.data.page,
        };
      });
      // return response.data;
    } catch (error) {
      setUsersState((prev) => {
        return {
          ...prev,
          loading: false,
          errorMessage: "Something went wrong while receiving info. Try again!",
        };
      });
    }
  };
  return {
    usersState,
    setUsersState,
    fetchUsers,
    fetcMoreUsers,
  };
};

export default useUserFetch;
