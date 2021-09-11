import React,{useState} from 'react'
import "./Module9.css"
import {useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheckCircle,faWindowClose,faArrowAltCircleUp} from "@fortawesome/free-solid-svg-icons"
export const Module9 = () => {
    const [btnState,setBtnState] = useState(true);
    const model1 = useSelector(state=>state.perState.value.model1per);
    const model2 = useSelector(state=>state.perState.value.model2per);
    const model3 = useSelector(state=>state.perState.value.model3per);
    return (
        <div className={btnState===true?"module9":"module9-close"}>
            <p className="arrowClicker"
            onClick={
                ()=>{
                    setBtnState(state=>!state)
                }
            }
            >
                {
                    btnState===true ? <FontAwesomeIcon icon={faWindowClose}/> : <FontAwesomeIcon icon={faArrowAltCircleUp}/>
                }
                
            </p>
            <div className={model1!=="100"?"model1":"model1-done"}

            >
                <p>{model1==="100"? "Loaded" : "Loading"} Model 1...
                    {
                        model1==="100"?
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        : null
                    }
                </p>
                <div>
                    <progress max="100" value={parseInt(model1)}></progress>
                    <p>{model1}%</p>
                </div>
            </div>
            <div className={model2!=="100"?"model1":"model1-done"}
           
            >
                <p>{model2==="100"? "Loaded" : "Loading"} Model 2...
                {
                        model2==="100"?
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        : null
                }
                </p>
                <div>
                    <progress
                    max="100" value={parseInt(model2)}
                    ></progress>
                    <p>{model2}%</p>
                </div>
            </div>
            <div className={model3!=="100"?"model1":"model1-done"}
            >
                <p>Loading Model 3...
                {
                        model3==="100"?
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        : null
                }
                </p>
                <div>
                    <progress
                    max="100" value={parseInt(model3)}
                    ></progress>
                    <p>{model3}%</p>
                </div>
            </div>  
        </div>
    )
}
