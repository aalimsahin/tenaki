// import sample from "./assets/real2.mp4";
import React from 'react'
import "./App.css";

const  App = () => {

  window.addEventListener("mousemove", () => {
    var sample = document.getElementById("my_video");
    sample.play();

  })

  return (
    <div>
      <video id="my_video" className="video"  autoPlay loop >
        <source  src="https://res.cloudinary.com/aalimsahin/video/upload/v1651110257/real2_c2tvcx.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
