import React,{useState} from 'react'
import "./Module9.css"
import {useSelector} from "react-redux"

export const Module9 = () => {
    const [testState,setTestState] = useState(true)
    const model1 = useSelector(state=>state.perState.value.model1per);
    const model2 = useSelector(state=>state.perState.value.model2per);
    const model3 = useSelector(state=>state.perState.value.model3per);
    return (
        <div className="module9">
            <div className={testState?"model1":"model1-done"}
           
            >
                <p>Loading Model 1...</p>
                <div>
                    <progress max="100" value={parseInt(model1)}></progress>
                    <p>{model1}%</p>
                </div>
            </div>
            <div className="model1"
           
            >
                <p>Loading Model 2...</p>
                <div>
                    <progress></progress>
                    <p>{model2}%</p>
                </div>
            </div>
            <div className="model1"
           
            >
                <p>Loading Model 3...</p>
                <div>
                    <progress></progress>
                    <p>{model3}%</p>
                </div>
            </div>  
        </div>
    )
}
