# WhatsApp Chat Analyzer

A lightweight MERN-style web application that analyzes exported WhatsApp group chat text files
and visualizes user engagement metrics such as daily active users and new members joined.

------------------------------------------------------------
FEATURES
------------------------------------------------------------
- Parses raw WhatsApp exported .txt chat files
- Calculates day-wise analytics for the last 7 days
- Counts:
  - New users joined per day
  - Active users per day (users who sent messages)
- Identifies users active for at least 4 out of the last 7 days
- Clean, responsive UI with bar chart visualization
- No database required (file-based, stateless analysis)

------------------------------------------------------------
TECH STACK
------------------------------------------------------------
Frontend:
- React (Vite)
- Tailwind CSS
- Recharts
- Axios

Backend:
- Node.js
- Express.js
- ES6 Modules
- File-based parsing

------------------------------------------------------------
PROJECT STRUCTURE
------------------------------------------------------------
whatsapp-chat-analyzer/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   └── data/
│       └── data.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── vite.config.js
└── README.md

------------------------------------------------------------
SUPPORTED WHATSAPP FORMAT
------------------------------------------------------------
3/30/21, 1:23 PM - +91 16 91994 added you
4/5/21, 2:19 PM - +91 60 68170 joined using this group's invite link
4/5/21, 2:25 PM - +91 41 40449: Hello everyone!

------------------------------------------------------------
API
------------------------------------------------------------
GET /api/analyze

Response:
{
  "last7Days": [
    {
      "date": "2021-04-01",
      "activeUsers": 12,
      "joinedUsers": 4
    }
  ],
  "activeFourDaysUsers": [
    "+91 74 66087",
    "+91 16 91994"
  ]
}

------------------------------------------------------------
RUN LOCALLY
------------------------------------------------------------

# Backend
cd backend
npm install
npm run dev

# Server runs at:
# http://localhost:5000

# Frontend
cd frontend
npm install
npm run dev

# App runs at:
# http://localhost:5173

------------------------------------------------------------
ASSUMPTIONS
------------------------------------------------------------
- A user is considered active if they send at least one message in a day
- New users are detected via WhatsApp system messages
- Analysis is limited to the last 7 days
- No persistent storage is used

------------------------------------------------------------
FUTURE IMPROVEMENTS
------------------------------------------------------------
- File upload support
- Custom date range selection
- Dark mode
- Export analytics (CSV / Image)
- Username mapping

------------------------------------------------------------
AUTHOR
------------------------------------------------------------
Karthikeyan
Full Stack Developer (MERN)


