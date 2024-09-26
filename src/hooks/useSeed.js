import { useState } from "react";
import generateRandomNumber from "../utils/uitls";

const useSeed = () => {
  const [seed, setSeed] = useState("");
  const generateSeed = () => {
    const result = generateRandomNumber();
    setSeed(result);
  };

  return {
    seed,
    setSeed,
    generateSeed,
  };
};
export default useSeed;
