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
        <source  src="https://res.cloudinary.com/dnccfnphy/video/upload/v1651112554/tenkainft_ay2ewf.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
