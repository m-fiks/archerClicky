import React from "react";
import "./Header.css";

const Header = props => (
        <div className="page-header">
                <h1>Archer Clicky Game!</h1>
                    <p>Click on the characters to earn points!</p>
                    <p>Clicking on the same character more than once will bring u to the daaaanger zone</p>
                    <p>Score: {props.currentScore} High Score: {props.highScore}</p>
        </div> 
    
)

export default Header;
