import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function StatsChart({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Daily Activity</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barCategoryGap="20%" barGap={25} margin={{ bottom: 40 }}>
          <XAxis 
            dataKey="date" 
            label={{ value: 'Date', position: 'insideBottom', offset: -5 }}
            stroke="#374151"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
            stroke="#374151"
            style={{ fontSize: '12px' }}
          />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: '40px' }} iconSize={18} />
          <Bar dataKey="activeUsers" name="Active Users" fill="#3b82f6" barSize={40} />
          <Bar dataKey="joinedUsers" name="Joined Users" fill="#10b981" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
