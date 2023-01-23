import React, {useState}from "react";
import LeftSideBar from "../components/LeftSideBar";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";
import Header from "../components/Header";
import "./Objectifs.css";

export default function Objectifs() {

    const [current, setCurrent] = useState(1);
    return (
        <div className="main-objectifs">
           <p>oibjectif</p>
        </div>
    );
}