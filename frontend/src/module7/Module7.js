import React from 'react'
import "./Module7.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram,faGithubSquare} from "@fortawesome/free-brands-svg-icons"

export const Module7 = () => {
    return (
        <div
        className="Module7"
        >
            <p
            className="relTitle"
            >
                Created as part of Spider 2.0: The Web Crawler by BIT, Sindhri
            </p>
            <div className="relLinks">
                <p>Related links :</p>

                <div className="relLinkers">
                    <a href="https://www.isro.gov.in/frequently-asked-questions/gaganyaan" target="_blank" rel="noreferrer">
                        ISRO Gaganyaan FAQ
                    </a>
                    <a href="https://www.isro.gov.in/about-isro/department-of-space-and-isro-hq" target="_blank" rel="noreferrer">
                        Department of Space
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Gaganyaan" target="_blank" rel="noreferrer">
                        Wikipedia Gaganyaan
                    </a>
                </div>
            </div>
            <div className="relAuthor">
                <p>CREATED BY ALWIN T</p>
                <div>
                    <a href="https://www.instagram.com/tanks.by.alwin/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram}/>
                        Instagram @tanks.by.alwin</a>
                    <a href="https://github.com/alwinsDen" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithubSquare}/>
                        GitHub @alwinsDen
                    </a>
                </div>
            </div>
        </div>
    )
}
