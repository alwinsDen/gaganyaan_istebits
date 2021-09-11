import React,{useState,useRef} from 'react'
import "./LeftNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowUp,faArrowDown,faExpand} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
export const LeftNav = () => {
    const [windConter, setWindCounter] = useState(1);
    const clicker = useRef(null);
    return (
        <div className="leftNav">
            <Link ref={clicker} to={`/fullmodule${windConter}`} target="_blank" className="leftNavLink"></Link>
            <div className="backwardpage"
            onClick={
                ()=>{
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
                onClick={()=>{
                    clicker.current.click();
                }}
                >
                    <FontAwesomeIcon icon={faExpand}></FontAwesomeIcon>
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
