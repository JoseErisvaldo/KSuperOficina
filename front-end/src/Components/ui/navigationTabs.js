// src/Components/ui/NavigationTabs.js
import React from 'react';

const NavigationTabs = ({ tabs, currentTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-200 overflow-auto">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`py-2 px-4 ${currentTab === tab.value ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'} focus:outline-none`}
          onClick={() => onTabChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;
