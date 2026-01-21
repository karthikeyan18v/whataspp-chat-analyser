export default function ActiveUsersCard({ users }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">👥 Active Users</h2>
        <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">{users.length}</span>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-sm">No active users</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {users.slice(0, 4).map((user, i) => (
            <div
              key={user}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 text-white flex items-center justify-center text-lg font-bold mb-2 flex-shrink-0 shadow-md">
                {i === 0 && '🥇'}
                {i === 1 && '🥈'}
                {i === 2 && '🥉'}
                {i === 3 && '🏅'}
                {i > 3 && i + 1}
              </div>
              <p className="text-sm font-semibold text-gray-900 truncate w-full">{user}</p>
              <p className="text-xs text-gray-500 mt-1">Active member</p>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
