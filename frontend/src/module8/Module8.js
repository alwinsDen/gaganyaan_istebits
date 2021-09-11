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
                        1.  What is Gaganyaan Programme? What are the goals/objectives of Gaganyaan programme?
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
                        2. What are the likely benefits as a result of undertaking Gaganyaan programme?
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
                        3. How ISRO is executing the Gaganyaan programme?
                    </p>
                </div>
            </div>
        </div>
    )
}
