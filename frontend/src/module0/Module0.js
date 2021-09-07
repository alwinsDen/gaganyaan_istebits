import React from 'react'
import "./Module0.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRocket} from '@fortawesome/free-solid-svg-icons'
export const Module0 = () => {
    return (
        <div className="module0">
            <p className="heading">
                <FontAwesomeIcon icon={faRocket}/>
                Gaganyaan
            </p>
            <p className="subheading">
                India's first manned mission to space
            </p>
        </div>
    )
}
