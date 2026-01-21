import dayjs from "dayjs";

export const analyzeData = (dayMap) => {
  const last7Days = [];
  const userActivityDays = {};

  const dates = Object.keys(dayMap).sort().slice(-7);

  console.log("Analyzing dates:", dates);

  for (const date of dates) {
    const activeUsers = [...dayMap[date].activeUsers];
    const joinedUsers = [...dayMap[date].joinedUsers];

    console.log(`Date ${date}: Active=${activeUsers.length}, Joined=${joinedUsers.length}`);
    if (joinedUsers.length > 0) {
      console.log("Joined users:", joinedUsers);
    }

    activeUsers.forEach(user => {
      userActivityDays[user] = (userActivityDays[user] || 0) + 1;
    });

    last7Days.push({
      date: dayjs(date).format("MMM D"),
      activeUsers: activeUsers.length,
      joinedUsers: joinedUsers.length
    });
  }

  const activeFourDaysUsers = Object.entries(userActivityDays)
    .filter(([_, days]) => days >= 4)
    .map(([user]) => user);

  return {
    last7Days,
    activeFourDaysUsers
  };
};
