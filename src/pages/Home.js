import React from "react";
import "../styles/pages.css";
import background from "../images/background2.jpeg"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container"> 
            <img src={background} alt="" className="back">
            </img>
            <div className="hello"> Hi, </div>
            <div className="me">I'm Edison Ying</div>
            <div className="description"> I am a programmer coming into the industry and this is my portfolio</div>
            <div className="beap">You can find my coursework in the ICS4U0 course here: </div>
            <button className="button-42" onClick={ () => navigate("/ICS4U0")} >ICS4U0</button>
       </div>
    )
}

export default Home