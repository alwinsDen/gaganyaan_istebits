import React,{useEffect} from 'react'
import "./Module4.css"
import image2 from "../models/gaganyaan pics2.png"
export const Module4 = () => {
    useEffect(() =>
    {
        document.getElementById("summ14").click();
        document.getElementById("summ24").click();
    },[])
    return (
        <div className="Module4"
        id="Module4"
        >
            <div className="question1">
                <details className="quesDet1">
                    <summary className="summ14"
                    id="summ14"
                    >
                        What are the likely benefits as a result of undertaking Gaganyaan programme? 
                    </summary>
                    <div>
                        <p
                        >
                            i) The Human spaceflight programme has both tangible and intangible benefits for the nation, which includes:
                        </p>
                        &nbsp;
                        <p>
                            ii) Progress towards a sustained and affordable human and robotic programme to explore the solar system and beyond.
                        </p>
                        &nbsp;
                        <p>
                            iii) Advanced technology capability for undertaking human space exploration, sample return missions and scientific exploration.
                        </p>
                        &nbsp;
                        <p>
                            iv) Future capability to actively collaborate in global space station development & to carry out scientific experiments of interest to the nation.
                        </p>
                        &nbsp;
                        <p>
                            v) Create a broad frame work for wider Academia – Industry partnership in taking up development activities for national development.
                        </p>
                        &nbsp;
                        <p>
                            vi) Ample scope for employment generation and human resource development in advanced science and R&D activities.
                        </p>
                        &nbsp;
                        <p>
                            vii) Unique opportunity to inspire and excite Indian youth and steer many students toward careers in science and technology towards challenging jobs that encourage knowledge, innovation and creativity.
                        </p>
                        &nbsp;
                        <p>
                            viii) The programme will strengthen international partnerships and global security through the sharing of challenging and peaceful goals. Having a vibrant human spaceflight programme can be leveraged as a potent foreign policy tool.
                        </p>
                    </div>
                </details>
                <details className="quesDet2">
                    <summary className="summ2"
                    id="summ24"
                    >
                        What is the 3D model shown above?
                    </summary>
                    <div>
                        <img src={image2} alt="" />
                        <p>
                            <span style={{fontWeight: '600'}}>In the image: </span>The module seperating from the main rocket.
                        </p>
                    </div>
                </details>
            </div>  
        </div>
    )
}
