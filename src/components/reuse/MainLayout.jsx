import React from 'react'
import AdminSidebar from '../AdminSidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex" style={{ width: '100vw' }}>
      <AdminSidebar />
      <div className="flex-grow flex justify-center">
        {/* Main content */}
        {children}
      </div>
    </div>
  );
};


export default MainLayout