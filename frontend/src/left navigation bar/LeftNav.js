import React,{useState} from 'react'
import "./LeftNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowUp,faArrowDown,faInfo} from "@fortawesome/free-solid-svg-icons"
export const LeftNav = () => {
    const [windConter, setWindCounter] = useState(1);
    return (
        <div className="leftNav">
            <div className="backwardpage"
            onClick={
                ()=>{
                    // document.getElementById("module1").scrollIntoView({behavior:"smooth",block:"center"});
                    if(windConter<2) {console.log("Not Allowed")} 
                    else {
                        document.getElementById(`module${windConter-2}`).scrollIntoView({behavior:"auto",block:"center"});
                        setWindCounter(windConter-2)
                    }
                }
            }
            >
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </div>
            <div className="infoModels"
            >
                <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
            </div>
            <div className="forwardpage"
            onClick={
                ()=>{
                    if(windConter>4) {console.log("Not Allowed")} 
                    else {
                        document.getElementById(`module${windConter+2}`).scrollIntoView({behavior:"auto",block:"center"});
                        setWindCounter(windConter+2)
                    }
                }
            }
            >
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
    )
}
