import React, { useState } from 'react';
import LoginForm from './components/auth/LoginForm';
import Sidebar from './components/layout/Sidebar';
import StudentDashboard from './components/dashboard/StudentDashboard';
import LecturerDashboard from './components/dashboard/LecturerDashboard';
import AIChat from './components/chat/AIChat';
import ProgressCharts from './components/progress/ProgressCharts';
import { UserRole } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [userRole, setUserRole] = useState<UserRole>('student');

  if (!isAuthenticated) {
    return <LoginForm onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return userRole === 'student' ? <StudentDashboard /> : <LecturerDashboard />;
      case 'chat':
        return <AIChat />;
      case 'progress':
        return <ProgressCharts />;
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        role={userRole}
        activePage={activePage}
        onPageChange={setActivePage}
      />
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;