import { parseChat } from "../services/chatParser.service.js";
import { analyzeData } from "../services/analytics.service.js";

export const analyzeChat = async (req, res) => {
  try {
    const parsedData = await parseChat();
    const result = analyzeData(parsedData);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
