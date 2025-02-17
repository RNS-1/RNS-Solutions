import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import AdminPanel from './components/AdminPanel';
import LoadingScreen from './components/LoadingScreen';
import { AdminProvider } from './contexts/AdminContext';
import { ProjectsProvider } from './contexts/ProjectsContext';
import { useAdmin } from './contexts/AdminContext';
import Portfolio from './components/Portfolio';

const AppContent: React.FC = () => {
  const { isAdmin } = useAdmin();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {isAdmin ? (
        <AdminPanel />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RNS-Solutions" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      )}
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000); // Initial loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true); // Show loading screen on route change
    const timer = setTimeout(() => {
      setLoading(false); // Hide loading screen after a short delay
    }, 3000); // Set loading duration to 3 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {initialLoading || loading ? (
        <LoadingScreen isLoading={initialLoading || loading} />
      ) : (
        <AppContent />
      )}
    </>
  );
};

const AppWrapper: React.FC = () => (
  <Router>
    <AdminProvider>
      <ProjectsProvider>
        <App />
      </ProjectsProvider>
    </AdminProvider>
  </Router>
);

export default AppWrapper;
