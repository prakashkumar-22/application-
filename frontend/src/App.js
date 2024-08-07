import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './components/LoginForm/SignupPage';
import ServicePage from './components/LoginForm/ServicePage';
import ContactPage from './components/LoginForm/ContactPage';
import LoginPage from './components/LoginForm/LoginPage';
import AboutPage from './components/LoginForm/AboutPage';
import Navbar from './components/LoginForm/Navbar';
import DashboardPage from './components/LoginForm/DashboardPage';
// Import other components and pages

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Add other routes here */}
        
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
