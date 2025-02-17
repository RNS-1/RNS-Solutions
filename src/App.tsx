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
        </Routes>
      )}
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AdminProvider>
        <ProjectsProvider>
          {initialLoading ? (
            <LoadingScreen isLoading={initialLoading} />
          ) : (
            <AppContent />
          )}
        </ProjectsProvider>
      </AdminProvider>
    </Router>
  );
};

export default App;
