import React from "react";
import './heroStyle.css';

function Info({ name, powerStats, biography, image }) {
    return (
        <div className="info">
            <h1>{name}</h1>
            <img src={image}/>
            <div className="stats">
                <ul>
                    <li>Combat: {powerStats.combat}</li>
                    <li>Durability: {powerStats.durability}</li>
                    <li>Intelligence: {powerStats.intelligence}</li>
                    <li>Power: {powerStats.power}</li>
                    <li>Speed: {powerStats.speed}</li>
                    <li>Strength: {powerStats.strength}</li>
                </ul>
            </div>
            <div className="bio">
                <ul>
                    <li>Fullname: {biography["full-name"]}</li>
                    <li>Alteregos: {biography["alter-egos"]}</li>
                </ul>
            </div>
        </div>
    );
}

export default Info;