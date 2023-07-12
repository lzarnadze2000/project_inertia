import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import './AppLayout.css'; // Import the CSS file for custom styles
 
const AppLayout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebarOnMobile = () => {
    if (window.innerWidth <= 768 && isSidebarVisible) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', closeSidebarOnMobile);
    return () => {
      window.removeEventListener('resize', closeSidebarOnMobile);
    };
  }, [isSidebarVisible]);

  return (
    <>
      <Header />
      <div className="flex">
        <div>
  {/* Responsive Menu Button */}
  <div className="menu-button" onClick={toggleSidebar}>
    {isSidebarVisible ? <FaTimes /> : <FaBars />}
  </div>

  {/* Sidebar */}
  {isSidebarVisible && (
    <div className="sidebar-container">
      <SideBar />
     
    </div>
    
  )}
</div>
 <div >
  
  <div className="flow-root">{children}</div>
  </div>
</div>


    </>
  );
};

export default AppLayout;
