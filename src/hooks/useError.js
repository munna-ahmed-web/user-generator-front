import { useState } from "react";

const useError = () => {
  const [errorState, setErrorState] = useState("");
  const [inputFieldValue, setInputFieldValue] = useState("");

  const handleRange = (e) => {
    setErrorState(e.target.value);
  };
  const handleInput = (e) => {
    setErrorState("");
    setInputFieldValue(e.target.value);
    setErrorState(Math.min(e.target.value, 10));
  };
  return {
    errorState,
    handleRange,
    inputFieldValue,
    handleInput,
  };
};

export default useError;
