import React from "react";
import "../styles/projects.css";    
import github from "../images/github.svg"

const Projects = () => {
    return (
        <div>
            <div className="title">Course Projects:</div>

            <div className="olg">📙 Data Structures and Algorithms</div>
            <div className="tasks">
                <div className="headers">Assignment Github Pages:<hr></hr></div>
                <div className="headers">Project Name:<hr></hr></div>
                <div className="headers">My Assignments on Github:<hr></hr></div>
                
                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Review-and-New">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                
                </a>
                <hr></hr>
                </div>
                <div className="task">📙 📗📗 Review and New<hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Data%20Structures%20%26%20Algorithms/Review%26New">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Data-Structures">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                
                </a>
                <hr></hr>
                </div>
                <div className="task">📙📙 Data Structures<hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Data%20Structures%20%26%20Algorithms/Data%20Structures">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Extending-Data-Structures">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                
                </a>
                <hr></hr>
                </div>
                <div className="task"> 📙📙 Extending Data Structures<hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Data%20Structures%20%26%20Algorithms/Extended%20Data%20Structures">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Algorithms">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                
                </a>
                <hr></hr>
                </div>
                <div className="task">📙📙📙 Algorithms<hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Data%20Structures%20%26%20Algorithms/Algorithms">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Recursion">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>
                <div className="task">📙📙📙 Recursion<hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Data%20Structures%20%26%20Algorithms/Recursion">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>
            </div>
            <div className="olg">📘 Programming and Project Development</div>
            
            <div className="tasks">

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Project-Development-and-Production">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>
                <div className="task">📘📘 Jump of Fate<hr></hr></div>
                <div>
                <a href="https://github.com/justapotato213/Jump-of-Fate">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

            </div>
            <div className="olg">📗 Digital Sage</div>

            <div className="tasks">

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Emerging-Technology">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>
                <div className="task">📗 Emerging Technologies <hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Digital%20Sage/Emerging%20Technologies">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

                <div>
                <a href="https://github.com/johnfraserss/ICS4U/wiki/Theoretical-Computer-Science">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>
                <div className="task">📗📗 Theoretical Computer Science <hr></hr></div>
                <div>
                <a href="https://github.com/Edison611/ICS4U0/tree/main/Digital%20Sage/Theoretical%20CS">
                <button className="button-30">Github
                    <img src={github} alt="" className="git_logo"></img>
                </button>
                </a>
                <hr></hr>
                </div>

            </div>
        </div>
    )
}

export default Projects   