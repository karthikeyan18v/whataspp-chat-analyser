import { useEffect, useState } from "react";
import { getAnalysis } from "../services/api";
import StatsChart from "../components/StatsChart";
import ActiveUsersCard from "../components/ActiveUsersCard";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAnalysis()
      .then(setData)
      .catch(() => setError("Failed to load analytics"));
  }, []);

  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">WhatsApp Chat Analyzer</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <StatsChart data={data.last7Days} />
          </div>
          <div>
            <ActiveUsersCard users={data.activeFourDaysUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
