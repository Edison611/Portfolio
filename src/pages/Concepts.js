import React from "react";
import "../styles/concepts.css";
import doc from "../images/doc.png"
import recur from "../images/recur.gif"
import c from "../images/class.png"
import inheritance from "../images/inheritance.png"
import fread from "../images/freading.png"
import fwrite from "../images/fwriting.png"
import sort from "../images/sorting.png"
import search from "../images/searching.png"
import { useState } from "react";
import Overlay from "../components/overlay";

import one from "../images/concepts/Documentation.png"

const Concepts = () => {


    const [isDoc, setIsDoc] = useState(false);
    const [isRecur, setIsRecur] = useState(false);
    const [isOpen, SetIsOpen] = useState(false);

    const toggleOverlay = () => {
        SetIsOpen(!isOpen);
    }

    return (
    <div>
        <div className="title"> Programming Concepts: </div>
        <div className="grid-container">
            <div className="col">
                <button className="button-57" role="button" onClick={ () => setIsDoc(!isDoc)}><span className="doc">
                    <div className="text">Documentation</div>
                    <img src={doc} className="documentation"></img>
                    </span>
                    <span>Documentation provides information to users about how the program functions.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isDoc} onClose={()=>setIsDoc(!isDoc)}>
                        <div className="header">Documentation:</div>
                    <div className="body">
                        <img src={one} className="code_ex"></img>
                        <div className="explanation">Documentation gives other users or programmers an understanding of what the code is doing and how it works. Programming is often a team effort and if others cannot understand what your program does, then it is hard for others to help when issues arise. The image on the left displays an example of documentation for a class. We first give a brief description of what the class does and how it works (Lines 12-16). Then we list out all of its attributes with their types (Lines 18-23) and methods with their parameters and return values (Lines 25-34)</div>
                        
                    </div>
                    <div className="subtitle">Python Class Documentation</div>
                    <div className="explanation">Below is a list of what you need to do for a class documentation in Python:</div>
                    <ul>
                        <li>1</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Overlay>
            </div>
            <div className="col">
                <button className="button-57" role="button" onClick={ () => setIsRecur(!isRecur)}><span className="doc">
                    <div className="text">Recursion</div>
                    <img src={recur} className="documentation"></img>
                    </span>
                    <span>Recursion is the repeated use of the same function in order to simplify the code.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isOpen} onClose={ ()=> setIsRecur(!isRecur)}>
                    <div>Recursion</div>
                </Overlay>
            </div>
            <div className="col">
                <button className="button-57" role="button" onClick={(toggleOverlay)}><span className="doc">
                    <div className="text">Classes & Objects</div>
                    <img src={c} className="documentation"></img>
                    </span>
                    <span>An object is a component of your program and classes define the properties and functions of objects.<br></br><br></br> Click to learn more!</span>
                </button>
                <Overlay isOpen={isOpen} onClose={toggleOverlay}>
                    <div>Classes % Objects</div>
                </Overlay>
            </div>



            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Inheritance</div>
                    <img src={inheritance} className="documentation"></img>
                    </span>
                    <span>Inheritance allows a child class to acquire all methods and properties from a parent class.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">File Reading</div>
                    <img src={fread} className="documentation"></img>
                    </span>
                    <span>Reading files allows you to take data from a database and transfer it onto your local platform for use.<br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">File Writing</div>
                    <img src={fwrite} className="documentation"></img>
                    </span>
                    <span>File writing allows you to save data in a secure and organized file for future usage.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
        </div>

        <div className="two">
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Sorting Algorithms</div>
                    <img src={sort} className="documentation"></img>
                    </span>
                    <span>Sorting algorithms can sort a list by a property so that it is easier to work with the data<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Searching Algorithms</div>
                    <img src={search} className="documentation"></img>
                    </span>
                    <span>Searching algorithms allows users to find an object within an array in a short period of time<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Concepts