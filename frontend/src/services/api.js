import axios from "axios";

export const getAnalysis = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/analyze"
  );
  return response.data;
};
