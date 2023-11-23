import React from 'react'
import Typical from "react-typical"
import profileImg from "../../assets/profile.png"
import "./Header.css"

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <h1>Hey! Am</h1>
                <h2 className='fullname'>Aswin P T</h2>
                <h2 >
                    I'm a {''}
                    <Typical
                        steps={[
                            'Front-End Developer 🌐', 1000,
                            'React Developer 🌐', 1000,
                        ]} loop={Infinity}
                        wrapper='b'
                    />
                </h2>
                <p>Hello and welcome to my portfolio! You'll find a selection of projects
                    here that demonstrate my knowledge, expertise, and enthusiasm for
                    [specific field or technology]. These projects reflect my journey
                    as a developer and problem solver, from web development to everything
                    in between.
                </p>
            </div>
            <div className='profile-img-container'>
                <img src={profileImg} alt='' />
                <div className='circle-1'></div>
                <div className='circle-2'></div>

            </div>
        </div>
    )
}

export default Header