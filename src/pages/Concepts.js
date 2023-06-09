import React from "react";
import "../styles/concepts.css";
import doc from "../images/doc.png"
import recur from "../images/recur.gif"
import c from "../images/class.png"

const Concepts = () => {
    return (
    <div>
        <div className="title"> Programming Concepts: </div>
        <div className="grid-container">
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Documentation</div>
                    <img src={doc} className="documentation"></img>
                    </span>
                    <span>Documentation provides information to users about how the program functions.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Recursion</div>
                    <img src={recur} className="documentation"></img>
                    </span>
                    <span>Recursion is the repeated use of the same function in order to simplify the code<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Classes & Objects</div>
                    <img src={c} className="documentation"></img>
                    </span>
                    <span>An object is a component of your program and classes define the properties and functions of objects<br></br><br></br> Click to learn more!</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default Concepts