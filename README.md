<<<<<<< HEAD
# WhatsApp Chat Analyzer

A full-stack application to analyze WhatsApp group chat exports and visualize user activity patterns.

## Features

- Parse WhatsApp chat export files
- Day-wise activity graph for the last 7 days
- Track active users (users who sent messages)
- Track joined users (new members)
- Identify highly active users (active ≥4 days in last 7 days)
- Clean, minimal UI with interactive charts

## Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS
- Recharts (for data visualization)

**Backend:**
- Node.js + Express
- Day.js (for date parsing)

## Installation

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

## Usage

1. Place your WhatsApp chat export file in `backend/data/data.txt`
2. Start both backend and frontend servers
3. Open the application in your browser
4. View the analytics dashboard with:
   - Daily activity chart (Active Users vs Joined Users)
   - List of top active contributors

## API Endpoints

- `GET /api/analyze` - Returns analyzed chat data

## Project Structure

```
whatsapp-chat-analyzer/
├── backend/
│   ├── data/
│   │   └── data.txt
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── app.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   └── App.jsx
    └── package.json
```

## Sample Data Format

WhatsApp chat export format:
```
4/7/21, 9:20 AM - +91 18 00680: Message text here
4/7/21, 9:37 AM - +91 47 83987 joined using this group's invite link
```

## License

MIT
=======
# whataspp-chat-analyser
A web-based analytics tool that parses exported WhatsApp group chat files and generates insightful, day-wise visualizations for group activity.
>>>>>>> c6db3d98dffd2ded4ae1dcd438fdedb9885b5915
