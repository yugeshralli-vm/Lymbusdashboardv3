import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Auth } from './components/Auth';
import { Toaster, toast } from 'sonner';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Simple local storage check for session persistence (mocked)
  useEffect(() => {
    const session = localStorage.getItem('lymbus_session');
    if (session === 'active') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('lymbus_session', 'active');
    toast.success('Successfully authenticated', {
      description: 'Welcome back to Lymbus AI Medical Dashboard.'
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('lymbus_session');
    toast.info('Signed out successfully');
  };

  return (
    <div className="antialiased">
      {isAuthenticated ? (
        <Layout onLogout={handleLogout} />
      ) : (
        <Auth onLogin={handleLogin} />
      )}
      <Toaster position="top-right" expand={true} richColors toastOptions={{ role: 'status' }} />
      {/* Accessible live region for screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="lymbus-live-region" />
      <div aria-live="assertive" aria-atomic="true" className="sr-only" id="lymbus-alert-region" />
    </div>
  );
};

export default App;