import React, { useState } from 'react';
import "./design2.css";

const Design2 = ({ story }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  return (
    <div className="design2-container">
      <div className="tabs">
        <button className={activeTab === 'summary' ? 'active' : ''} onClick={() => handleTabClick('summary')}>Summary</button>
        <button className={activeTab === 'details' ? 'active' : ''} onClick={() => handleTabClick('details')}>Details</button>
        <button className={activeTab === 'image' ? 'active' : ''} onClick={() => handleTabClick('image')}>Image</button>
      </div>
      <div className="tab-content">
        {activeTab === 'summary' && story && (
          <div>
            <h2>{story.title}</h2>
            <p>By: {story.author}</p>
            <p>{story.summary}</p>
          </div>
        )}
        {activeTab === 'details' && (
          <div>
            <h2>Details</h2>
          </div>
        )}
        {activeTab === 'image' && story && (
          <div>
            <h2>Image</h2>
            <img
              src={`https://ik.imagekit.io/dev24/${story.Image}`}
              alt={story.title || 'Story Image'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Design2;
