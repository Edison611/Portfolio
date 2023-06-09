import React from "react";
import "../styles/ICS4U0.css";
import im1 from "../images/programming_concepts.png";
import im2 from "../images/projects.png";
import { useNavigate } from "react-router-dom";

const ICS4U0 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="title">
                Concepts and Projects for the ICS4U0 course can be found below:
            </div>
            <div className="frame">
            <button className="button-orng" onClick={ ()=> navigate("/Concepts")}><span className="text">
                <div className="pctext">Programming Concepts</div>
                <img src={im1} alt="pc_im" className="pc_im"></img>
            </span></button>
            <button className="button-orng" onClick={ ()=> navigate("/Projects")}><span>
                <div className="protext">Projects</div>
                <img src={im2} alt="pro_im" className="pro_im"></img>
            </span></button>
            </div>
        </div>
    )
}

export default ICS4U0