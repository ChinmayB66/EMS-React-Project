import { useState } from 'react';
import employeeMSImage from '../../public/ems2.png';  

const EmployeeLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden lg:grid lg:grid-cols-12">
        
        <section className="relative flex items-center justify-center lg:col-span-6">
          <img
            alt="background"
            src={employeeMSImage}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12">
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="mb-4 col-span-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
                  placeholder="Enter your username"
                  value={username}  
                  onChange={(e) => setUsername(e.target.value)}  
                />
              </div>

              <div className="mb-6 col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black bg-white"
                  placeholder="Enter your password"
                  value={password}  
                  onChange={(e) => setPassword(e.target.value)}  
                />
              </div>

              <div className="col-span-6">
                <button
                  type="button"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 mb-4"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Login
                </button>
              </div>

              <div className="col-span-6">
                <button
                  type="button"
                  className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
                  onClick={() => window.location.href = '/'}
                >
                  Back to home
                </button>
              </div>
            </form>
          </div>
        </main>

      </div>
    </section>
  );
};

export default EmployeeLogin;
