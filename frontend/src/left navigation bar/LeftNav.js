import React from 'react'
import "./LeftNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowUp,faArrowDown,faInfo} from "@fortawesome/free-solid-svg-icons"
export const LeftNav = () => {
    return (
        <div className="leftNav">
            <div className="backwardpage">
                <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
            </div>
            <div className="infoModels"
            onClick={
                ()=> {
                }
            }
            >
                <FontAwesomeIcon icon={faInfo}></FontAwesomeIcon>
            </div>
            <div className="forwardpage">
                <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
    )
}
