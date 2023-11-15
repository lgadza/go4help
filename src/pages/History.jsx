import React from 'react';
import "./History.css"
import HeaderWithMap from '../components/ui/HeaderWithMap';
import VolunteerForm from '../components/form/VolunteerForm';


const HistoryContent = () => {
  return (
    <div className="history-content">
      {/* Content of the history section */}
      <p>Here is the detailed history...</p>
      {/* Populate the rest of the content */}
    </div>
  );
};



const History = () => {
  return (
    <div className="main-container">
      <HeaderWithMap />
      <div className="main-content">
        <HistoryContent />
        <VolunteerForm />
      </div>
    </div>
  );
};

export default History;
