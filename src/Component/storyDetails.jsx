import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Design2 from './design2';

const StoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(`https://child.onrender.com/api/sciencefiction/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch story');
        }
        const data = await response.json();
        console.log(data);
        setStory(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching story:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStory();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!story) {
    return <div>No story found</div>;
  }

  return <Design2 story={story} />;
};

export default StoryDetails;
