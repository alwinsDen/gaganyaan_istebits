import React,{useEffect} from 'react'
import "./Module6.css"
export const Module6 = () => {
    useEffect(()=>
    {
        document.getElementById("summ16").click();  
    })
    return (
        <div className="Module6">
            <div className="question1">
                <details className="quesDet1">
                    <summary className="summ16"
                    id="summ16"
                    >
                        What is ISRO's Gaganyaan mission?
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
                    </div>
                </details>
                <details className="quesDet2">
                    <summary className="summ2"
                    id="summ2"
                    >
                        About the 3D model?
                    </summary>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat amet ipsum dicta, tenetur commodi velit officiis dolores natus quis dolor quos. Quisquam ducimus aut at.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    )
}