import React from 'react'
import "./Module0.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon, faRocket,faSpider} from '@fortawesome/free-solid-svg-icons'

export const Module0 = () => {
    return (
        <div className="module0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" alt="isro" className="isroLogo"/>

            <div className="headPart">
                <p className="heading">
                    <FontAwesomeIcon icon={faRocket}
                    className="rocketLogo"
                    />
                    Gaganyaan
                    <FontAwesomeIcon icon={faMoon}
                    className="moonLogo"/>
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

            <div className="isteLogo">
                <div className="spiderLogo">
                    <FontAwesomeIcon icon={faSpider}/>
                </div>
                &nbsp;
                <div className="logoText">
                    <p>ISTE BITS</p>
                    <p>Spider 2.0</p>
                </div>
            </div>
        </div>
    )
}
