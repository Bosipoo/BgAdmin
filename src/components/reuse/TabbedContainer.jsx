import React, { useState } from 'react';

const TabbedContainer = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex rounded-lg overflow-hidden" style={{ height: '75vh' }}>
      {/* Tabs on the left */}
      <div className="flex flex-col bg-white p-6" style={{ width: '20%' }}> 
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 my-1 rounded ${
              activeTab === index ? 'bg-yellow-500' : 'bg-white'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>

      {/* Container displaying different content based on the active tab */}
        <div className="flex-1 bg-white p-6 border-l border-gray-200 rounded-r-lg overflow-y-auto">
            {/* Display content for the active tab */}
            {tabs[activeTab].content}
        </div>
    </div>
  );
};

export default TabbedContainer;
