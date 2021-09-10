import './App.css';
import React,{useEffect} from 'react'

import LazyLoad from "react-lazyload"
import {Module0} from './module0/Module0'
import {Module1} from './module1/Module1'
import {LeftNav} from "./left navigation bar/LeftNav"
import {RightNav} from "./right navigation bar/RightNav"
import {Module2} from "./module2/Module2"
import {Module3} from "./module3/Module3"
import {Module4} from "./module4/Module4"
import {Module5} from "./module5/Module5"
import {Module6} from "./module6/Module6"
import {Module7} from "./module7/Module7"
import {Module8} from "./module8/Module8"

import backVid from "./wallpapers/video.mp4"
import backMusic from "./wallpapers/backMusic.mp3"

import {useSelector} from "react-redux"

function App() {
  const windControl = useSelector(state=>state.windCtrl.value)
  const musicState = useSelector(state=>state.audioControl.value)
  const autoMusic=()=>{
    console.log("workign")
    document.getElementById("backMusic").play()
  }
  useEffect(()=>
  {
    document.getElementById("backVid1").play(); 
    window.addEventListener("mouseover",autoMusic,false);
    return()=>{
      window.removeEventListener("mouseover",autoMusic)
    }
  },[])  
  useEffect(()=>
  {
    if(musicState===false) 
      document.getElementById("backMusic").muted = true
    else 
      document.getElementById("backMusic").muted = false
  },[musicState]) 
  return (
    <div className="App" id="App"
    >
      <video autoPlay muted loop id="backVid1">
        <source src={backVid} type="video/mp4"/>
      </video>
      <audio id="backMusic" loop autoPlay>
        <source src={backMusic} type="audio/mpeg"/>
      </audio>
      <div className="subApp">
        <LeftNav />
        <RightNav />
        <Module0/>      
        <Module1/>
        <Module2/>
        <LazyLoad height={200} offset={100}>
          <Module3/>
        </LazyLoad>
        <Module4/>
        <LazyLoad height={200} offset={100}>
          <Module5/>
        </LazyLoad>
        <Module6/>
        <Module7/>
        {
          windControl === true ? <Module8/> : null
        }
      </div>
    </div>
  );
}

export default App;
