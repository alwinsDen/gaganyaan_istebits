import React from 'react'
import "./Module0.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faRocket} from '@fortawesome/free-solid-svg-icons'
export const Module0 = () => {
    return (
        <div className="module0">
            <p className="heading">
                <FontAwesomeIcon icon={faRocket}/>
                Gaganyaan
                <FontAwesomeIcon icon={faMoon}/>
            </p>
            <p className="subheading">
                <span
                style={{color:"orange"}}>
                    India's first &nbsp;
                </span>
                <span
                style={{color:"white"}}
                >
                    manned mission &nbsp;
                </span>
                <span
                style={{color:"lightgreen"}}>
                     to space
                </span>
            </p>
        </div>
    )
}
