import React from "react";

import todolist from "../assets/graph/todolist.svg"
import ranked from "../assets/graph/ranked.svg"

export default function Engagements() {
    return (
        <div>
            <h1>Mes Fiches impacts</h1>
            <img className="img" src={todolist}></img>
            <img className="img" src={ranked}></img>
        </div>
    );
}