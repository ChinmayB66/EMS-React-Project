import { Routes, Route } from 'react-router-dom';
import { ServicesProvider } from '../src/pages/services';
import EmployeeRegistration from './pages/reg'; 
import EmployeeLogin from './pages/login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <ServicesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<EmployeeRegistration />} />
        <Route path="/login" element={<EmployeeLogin />} />
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </ServicesProvider>
  );
}

export default App;
