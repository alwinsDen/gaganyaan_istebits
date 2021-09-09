import './App.css';
import React,{useEffect} from 'react'
import LazyLoad from "react-lazyload"
import {Module0} from './module0/Module0'
import {Module1} from './module1/Module1'
import {LeftNav} from "./left navigation bar/LeftNav"
import {RightNav} from "./right navigation bar/RightNav"
import {Module2} from "./module2/Module2"
import {Module3} from "./module3/Module3"
import backVid from "./wallpapers/video.mp4"
import backMusic from "./wallpapers/backMusic.mp3" 
function App() {
  const autoMusic=()=>{
    document.getElementById("backMusic").play();
  }
  useEffect(()=>
  {
    document.getElementById("backVid1").play(); 
    window.addEventListener("mouseover",autoMusic,false);
    return()=>{
      window.removeEventListener("mouseover",autoMusic)
    }
  },[])  
  return (
    <div className="App" id="App"
    >
      <video autoplay muted loop id="backVid1">
        <source src={backVid} type="video/mp4"/>
      </video>
      <audio id="backMusic" loop hidden>
        <source src={backMusic} type="audio/mpeg"/>
      </audio>
      <div className="subApp">
        <LeftNav />
        <RightNav />
        <Module0/>      
        <Module1/>
        <Module2/>
        <LazyLoad height={200} offset={-100}>
        <Module3/>
        </LazyLoad>
      </div>
    </div>
  );
}

export default App;
