import React from "react";
import '../App.css'

const Background = ({ videoUrl }) =>{
  return (
    <div>
      {videoUrl && (
        <video autoPlay muted loop id="bg-video">
          <source src={ videoUrl } type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Background;
