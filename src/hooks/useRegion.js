import { useState } from "react";

const useRegion = () => {
  const [region, setRegion] = useState("");
  const handleSelect = (v) => {
    setRegion(v.value);
  };

  return {
    region,
    setRegion,
    handleSelect,
  };
};

export default useRegion;
