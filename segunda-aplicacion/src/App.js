
import './App.css';
import React, { useRef } from 'react';
import video from "./assets/board.mp4";

function App() {

const videoRef = useRef(null);

const videoPlay = () => {
  videoRef.current.play();
};

const videoPause = () => {
  videoRef.current.pause();
};

return(
  <div>
    <video ref={videoRef} width="400px">
      <source src={video} type="video/mp4" />
    </video>
    <div>
      <button onClick={videoPlay} className="btn">Play</button>
      <button onClick={videoPause} className="btn">Pause</button>
    </div>
  </div>
);
}

export default App;
