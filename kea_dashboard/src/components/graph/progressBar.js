import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
    return (
        <div className="main-progress">
            <div className="progress-title">
                <h2 style={{ fontSize:'16px' }}>Classement des secteurs en fonction du nombre de cases activée - 377 au total</h2>
            </div>
            <div className="progress-chart">
                <div className="progress-item">
                    <p>Distribution</p>
                    <ProgressBar
                        completed={50}
                    />
                </div>
            </div>
        </div>
    );
}

export default Progress;