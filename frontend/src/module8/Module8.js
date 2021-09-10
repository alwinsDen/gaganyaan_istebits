import React from 'react'
import "./Module8.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowClose} from "@fortawesome/free-solid-svg-icons"
import {windContrl} from "../features/windowCloseControl"
import {useDispatch} from "react-redux"
export const Module8 = () => {
    const dispatch = useDispatch();
    return (
        <div className="module8">
            <div className="controllers"
            onClick={() =>
            {
                dispatch(windContrl())
            }}
            >
                    <FontAwesomeIcon icon={faWindowClose}
                    className="ctrlLogo"
                    />
                </div>
            <div className="tabCover">
                <div className="references">
                    References
                </div>
                <hr />  
                <div className="model1"
                onClick={
                    ()=>{
                        document.getElementById(`module1`).scrollIntoView({behavior:"auto",block:"center"});
                        dispatch(windContrl());
                    }
                }
                >
                    <p>
                        1. What is ISRO's Gaganyaan Mission?
                    </p>
                </div>
                <div className="model2"
                onClick={
                    ()=>{
                        document.getElementById(`module3`).scrollIntoView({behavior:"auto",block:"center"});
                        dispatch(windContrl());
                    }
                }>
                    <p>
                        2. What are the benefits of the mission??
                    </p>
                </div>
                <div className="model3"
                onClick={
                    ()=>{
                        document.getElementById(`module5`).scrollIntoView({behavior:"auto",block:"center"});
                        dispatch(windContrl());
                    }
                }>
                    <p>
                        3. Which agencies are cooperating with ISRO on Gaganyaan mission?
                    </p>
                </div>
            </div>
        </div>
    )
}
