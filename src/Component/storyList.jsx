import React, { useState, useEffect } from 'react';

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('https://child.onrender.com/api/sciencefiction');
        const data = await response.json();
        console.log(data);
        setStories(data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, []);

  return (
    <div className="story-list">
      {stories && stories.map(story => (
        <div key={story.id} className="story-card">
          <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
          <h3>{story.title}</h3>
          <p>By: {story.author}</p>
        </div>
      ))}
    </div>
  );
};

export default StoryList;
