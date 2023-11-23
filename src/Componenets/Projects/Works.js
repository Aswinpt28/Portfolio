import React from 'react'
import w1 from "../../assets/w1.jpg";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import "./Works.css"


const Works = () => {
    return (
        <div className='works-container'>
            <h1>My Projects</h1>
            <div className='works-list-container'>
                <div className="works-item">
                    <img src={w1} alt="work1" />
                </div>
                <div className="works-item">
                    <img src={w2} alt="work2" />
                </div>
                <div className="works-item">
                    <img src={w3} alt="work3" />
                </div>
            </div>
        </div>
    )
}

export default Works