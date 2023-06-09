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
                    <span>Recursion is the repeated use of the same function in order to simplify the code.<br></br><br></br><br></br> Click to learn more!</span>
                </button>
            </div>
            <div className="col">
                <button className="button-57" role="button"><span className="doc">
                    <div className="text">Classes & Objects</div>
                    <img src={c} className="documentation"></img>
                    </span>
                    <span>An object is a component of your program and classes define the properties and functions of objects.<br></br><br></br> Click to learn more!</span>
                </button>
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