import React from 'react';
import './App.css'
import Min_Sidebar from './components/Min_Sidebar';
import Max_Sidebar from './components/Max_Sidebar';

import Background from './components/Background';
import video1 from './assets/pexels-rostislav-uzunov-5680034 (1080p).mp4';

function App() {
  const videoUrl = video1;
  
  return (
    <div className="App">
    <Min_Sidebar />
    <Max_Sidebar />
  
    <Background videoUrl={videoUrl} />
    </div>
  );
}


export default App;