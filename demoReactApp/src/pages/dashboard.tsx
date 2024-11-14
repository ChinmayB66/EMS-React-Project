import React from 'react';

const employees = [
  {
    id: 1,
    name: 'ABC',
    role: 'Software Engineer',
    projects: ['Employee Management System', 'Ecommerce Website'],
    leaveHistory: [
      { date: '2024-01-10', type: 'Sick Leave' },
      { date: '2024-03-15', type: 'Annual Leave' },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center w-full px-15 bg-blue-400 text-center py-24">
      <h1 className="text-3xl font-bold text-center mb-8">Employee Dashboard</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">Employee Name</th>
              <th className="px-4 py-2 border-b">Role</th>
              <th className="px-4 py-2 border-b">Projects Handled</th>
              <th className="px-4 py-2 border-b">Leave History</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.role}</td>
                <td className="px-4 py-2">
                  {employee.projects.join(', ')}
                </td>
                <td className="px-4 py-2">
                  <ul>
                    {employee.leaveHistory.map((leave, index) => (
                      <li key={index}>
                        {leave.date} - {leave.type}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
