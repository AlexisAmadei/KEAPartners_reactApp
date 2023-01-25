import React from "react";
import todolist from "../assets/graph/todolist.svg"
import ranked from "../assets/graph/ranked.svg"

export default function Engagements() {
    return (
        <div>
            <h1>Mes Fiches impacts</h1>
            <img src={ranked}></img>
            <img src={todolist}></img>
        </div>
    );
}