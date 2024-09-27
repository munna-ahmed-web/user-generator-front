import { useState } from "react";
import generateRandomNumber from "../utils/uitls";

const useSeed = () => {
  const [seed, setSeed] = useState("");

  const generateSeed = () => {
    const result = generateRandomNumber();
    setSeed(result);
  };
  const handleSeed = (e) => {
    setSeed(e.target.value);
  };

  return {
    seed,
    setSeed,
    generateSeed,
    handleSeed,
  };
};
export default useSeed;
