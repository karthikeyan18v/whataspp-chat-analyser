import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import { MESSAGE_REGEX, JOIN_REGEX } from "../utils/regex.utils.js";

export const parseChat = async () => {
  const filePath = path.resolve("data/data.txt");
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const dayMap = {};

  for (const line of lines) {
    // Check for join messages first
    if (JOIN_REGEX.test(line)) {
      const joinMatch = line.match(/^(\d{1,2}\/\d{1,2}\/\d{2,4}),.*?- (.+?) joined/);
      if (joinMatch) {
        const [_, dateRaw, user] = joinMatch;
        const date = dayjs(dateRaw, ["D/M/YY", "D/M/YYYY"]).format("YYYY-MM-DD");
        
        if (!dayMap[date]) {
          dayMap[date] = {
            activeUsers: new Set(),
            joinedUsers: new Set()
          };
        }
        dayMap[date].joinedUsers.add(user.trim());
        console.log(`Joined user found: ${user.trim()} on ${date}`);
      }
      continue;
    }

    // Check for regular messages
    const messageMatch = line.match(MESSAGE_REGEX);
    if (!messageMatch) continue;

    const [_, dateRaw, user] = messageMatch;
    const date = dayjs(dateRaw, ["D/M/YY", "D/M/YYYY"]).format("YYYY-MM-DD");

    if (!dayMap[date]) {
      dayMap[date] = {
        activeUsers: new Set(),
        joinedUsers: new Set()
      };
    }

    if (user && !line.includes("created group") && !line.includes("added")) {
      dayMap[date].activeUsers.add(user);
    }
  }

  console.log("Final dayMap:", JSON.stringify([...Object.entries(dayMap)].map(([date, data]) => ({
    date,
    activeUsers: data.activeUsers.size,
    joinedUsers: data.joinedUsers.size
  })), null, 2));

  return dayMap;
};
