import { useState } from "react";

const useError = () => {
  const [errorState, setErrorState] = useState("");
  const [inputFieldValue, setInputFieldValue] = useState("");
  const [erroRange, setErroRange] = useState("");

  const handleRange = (e) => {
    setInputFieldValue("");
    setErrorState(e.target.value);
    setErroRange(e.target.value);
  };
  const handleInput = (e) => {
    const value = Math.max(0, Math.min(1000, Number(e.target.value)));

    if (value === 0) {
      setInputFieldValue("");
      setErrorState("");
    } else {
      setErrorState(value);
      setInputFieldValue(value);
    }
  };
  return {
    errorState,
    handleRange,
    inputFieldValue,
    handleInput,
    erroRange,
  };
};

export default useError;
