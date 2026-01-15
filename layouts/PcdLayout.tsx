import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const PcdLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Persistent Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 h-full overflow-y-auto bg-white">
        <div className="max-w-5xl mx-auto p-8 md:p-12 lg:p-16">
           <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PcdLayout;