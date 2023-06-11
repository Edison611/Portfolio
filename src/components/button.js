import React from "react";
import Overlay from "./overlay";

export function Button ({ title, description, }) {
    <div className="col">
        <button className="button-57" role="button" onClick={ () => setIsDoc(!isDoc)}><span className="doc">
            <div className="text"></div>
            <img src={doc} className="documentation"></img>
            </span>
            <span>{}<br></br><br></br><br></br> Click to learn more!</span>
        </button>
        <Overlay isOpen={isDoc} onClose={()=>setIsDoc(!isDoc)}>
                <div className="header">Documentation:</div>
            <div className="body">
                <img src={one} className="code_ex"></img>
                <div className="explanation">Documentation gives other users or programmers an understanding of what the code is doing and how it works. Programming is often a team effort and if others cannot understand what your program does, then it is hard for others to help when issues arise. The image on the left displays an example of documentation for a class. We first give a brief description of what the class does and how it works (Lines 12-16). Then we list out all of its attributes with their types (Lines 18-23) and methods with their parameters and return values (Lines 25-34)</div>
                
            </div>
            <div className="subtitle">Python Class Documentation</div>
            <div className="explanation">Below is a list of what you need to do for a class documentation in Python:</div>
        </Overlay>
    </div>
}

export default Button