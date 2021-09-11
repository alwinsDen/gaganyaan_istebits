import React from 'react'

export const Loader = () => {
    return (
        <div>
            <div className="loadersSec" id="loadersSec">
                <p id="loaderpercent"></p>
                <progress  id="loaderRender" max="100"></progress>
                <p className="d3Env">Loading 3d environment</p>
            </div>
            <div className="instuctionScreen" id="instuctionScreen"
            onClick={
                (e)=>
                {document.getElementById("instuctionScreen").style.display = "none";
                document.getElementById("summ1").click();
                document.getElementById("summ2").click();
                }
            }
            >
                <div>
                    <FontAwesomeIcon icon={faMouse}
                    className="mouseIcon1"
                    />
                    <p>
                        Drag mouse 
                    </p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPlus} className="plusIcon"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={faKeyboard}
                    className="keyboardIcon1"
                    />
                    <p>
                        Shift key
                    </p>
                </div>
            </div>
            <div className="mobileInstructions"
            id="mobileInstructions"
            onClick={
                (e)=>
                {document.getElementById("mobileInstructions").style.display = "none";
                document.getElementById("summ1").click();
                }
            }
            >
                <div>
                    <FontAwesomeIcon icon={faFingerprint}
                    className="handicon"
                    />
                    <p>
                        Drag 3d model
                    </p>
                </div>
            </div>
        </div>
    )
}
