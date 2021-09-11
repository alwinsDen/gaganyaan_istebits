import React from 'react'
import "./Module2.css"
import firstImage from "../models/gaganyaan pics1.png"
import newImage1 from "../models/actronautface.png"
import newImage2 from "../models/actronautScale.png"
export const Module2 = () => {
    return (
        <div className="module2"
        id="module2">
            <div className="question1">
                <details className="quesDet1">
                    <summary className="summ1"
                    id="summ1"
                    >
                        What is Gaganyaan Programme? What are the goals/objectives of Gaganyaan programme?
                    </summary>
                    <div>
                        <p
                        >
                        The Gaganyaan Programme envisages undertaking the demonstration of human spaceflight to Low Earth Orbit (LEO) in the short-term and will lay the foundation for a sustained Indian human space exploration programme in the long run.
                        </p>
                        <br />
                        <p>
                        The objective of Gaganyaan programme is to demonstrate indigenous capability to undertake human space flight mission to LEO.
                        </p>
                        <br />
                        <p>
                        As part of this programme, two unmanned missions and one manned mission are approved by Government of India (GoI). 
                        </p>
                        <div>
                            <div className="firstImage1">
                                <img src={newImage2} alt="" className="firstImageName1"/>
                                <div>
                                    <p>
                                        The scale of Module compared to a Vyomnaut. 1-3 Vyomnauts will stay in the module for about 7 days in Lower Earth Orbit.
                                    </p>
                                </div>
                            </div>
                            <div>
                            <div>
                                    <p>
                                        A close-up view of the Vyomnaut suit.Rendered in Blender 2.93
                                    </p>
                                </div>
                                <img src={newImage1} alt="" className="firstImageName2"/>
                            </div>
                        </div>
                    </div>
                </details>
                <details className="quesDet2">
                    <summary className="summ2"
                    id="summ2"
                    >
                        What is the 3D model shown above?
                    </summary>
                    <div>
                        <img src={firstImage} alt="" />
                        &nbsp;
                        <p>
                        Gaganyaan crew module is a fully autonomous 5.3 t (12,000 lb) spacecraft designed to carry a 3-member crew to orbit and safely return to the Earth after a mission duration of up to seven days. Its 2.9 t (6,400 lb) service module is powered by liquid propellant engines. 
                        </p>
                        &nbsp;
                        <p>
                        The crew module is mated to the service module, and together they constitute 8.2 t (18,000 lb) orbital module. The space capsule will have life support and environmental control systems. It will be equipped with emergency mission abort and emergency escape that can be done at the first stage or second stage of the rocket burn. The nose of the original version of the orbital vehicle was free for a docking mechanism, but primary entry was evidently through a side hatch secured by explosive bolts.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    )
}
