import React,{useEffect} from 'react'
import "./Module6.css"
import thirdImage from "../models/gaganyaan pics3.png"
export const Module6 = () => {
    useEffect(()=>
    {
        document.getElementById("summ16").click();  
        document.getElementById("summ22").click();  
    })
    return (
        <div className="Module6">
            <div className="question1">
                <details className="quesDet1">
                    <summary className="summ16"
                    id="summ16"
                    >
                        How ISRO is executing the Gaganyaan programme?
                    </summary>
                    <div>
                        <p
                        >
                        The Gaganyaan Programme is going to be a major National effort. The overall programme co-ordination, systems engineering and implementation will be carried out by ISRO.
                        </p>
                        <br />
                        <p>
                        Further, the human rated launch vehicle, crew escape system, Orbital module and essential infrastructure will be realised by ISRO utilizing the in-house expertise and with participation of Industry, Academia and National agencies.
                        </p>
                        <br />
                        <p>
                        The private players in the country have developed significant expertise in niche areas, and this will be effectively utilized in the programme. 
                        </p>
                    </div>
                </details>
                <details className="quesDet2">
                    <summary className="summ2"
                    id="summ22"
                    >
                        About the 3D model?
                    </summary>
                    <div>
                        <img src={thirdImage} alt="" />
                        &nbsp;
                        <p>
                            About 16 minutes after liftoff from the Satish Dhawan Space Centre (SDSC), Sriharikota, the rocket will inject the spacecraft into an orbit 300–400 km (190–250 mi) above Earth. 
                        </p>
                        &nbsp;
                        <p>
                            When ready to land, its service module and solar panels will be disposed off before reentry. The capsule would return for a parachute splashdown in the Bay of Bengal.
                        </p>
                        &nbsp;
                        <p>
                            Crew module is equipped with two parachutes for redundancy, while one parachute is good enough for safe splashdown. The parachutes would reduce the speed of the crew module from over 216 m/s (710 ft/s) to under 11 m/s (36 ft/s) at splashdown.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    )
}
