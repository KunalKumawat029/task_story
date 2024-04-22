import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StoryDetails from './Component/storyDetails';
import Design1 from './Component/storyCard';

function App(){
  return (
    <>
     <Routes>
         <Route  path="/" element={<Design1/>} />
         <Route path="/story/:id" element={<StoryDetails/>} />
    </Routes>
    </>
  );
};

export default App;