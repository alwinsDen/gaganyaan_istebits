import React from 'react'
import "./RightNav.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLink, faReceipt, faVolumeOff, faVolumeMute} from "@fortawesome/free-solid-svg-icons"
import {useDispatch, useSelector} from "react-redux"
import {switcher} from "../features/audioControl"
import {windContrl} from "../features/windowCloseControl"

export const RightNav = () => {
    const dispatch = useDispatch();
    const musicStates = useSelector(state=>state.audioControl.value)
    return (
        <div className="rightNav">
            <div className="musicToggle"
            style={{ background: musicStates ? "":"red"}}
            onClick={() => 
            {
                dispatch(switcher())
            }}
            >
                {musicStates === true ?
                    <FontAwesomeIcon icon={faVolumeOff}></FontAwesomeIcon>
                : <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>}
            </div>
            <div className="options"
            onClick={() => 
            {
                dispatch(windContrl())
            }}
            >
                <FontAwesomeIcon icon={faReceipt} className="optionsLogo"></FontAwesomeIcon>
            </div>
            <div className="copy-link"
            onClick={() => 
            {
                document.getElementById("Module7").scrollIntoView({block:"end",behavior:"smooth"})
            }}
            >
                <FontAwesomeIcon
                className="copy-linkLogo"
                icon={faLink}></FontAwesomeIcon>
            </div>
        </div>
    )
}
