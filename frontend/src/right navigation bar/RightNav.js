import React from 'react'
import "./RightNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMusic,faNotesMedical,faLink} from "@fortawesome/free-solid-svg-icons"
export const RightNav = () => {
    return (
        <div className="rightNav">
            <div className="musicToggle">
                <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </div>
            <div className="options">
                <FontAwesomeIcon icon={faNotesMedical} className="optionsLogo"></FontAwesomeIcon>
            </div>
            <div className="copy-link">
                <FontAwesomeIcon
                className="copy-linkLogo"
                icon={faLink}></FontAwesomeIcon>
            </div>
        </div>
    )
}
