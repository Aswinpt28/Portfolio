import React from 'react'
import "./Service.css"

const Services = () => {
    return (
        <div className='service-container'>
            <div className='service-list-container'>
                {/* description */}
                <div className='services-desc-container'>
                    <h1>Services</h1>
                    <p>
                        Hello and welcome to my portfolio! You'll find a selection
                        of projects here that demonstrate my knowledge, expertise,
                        and enthusiasm for [specific field or technology]. These
                        projects reflect my journey as a developer and problem solver,
                        from web development to everything in between.
                    </p>
                    <button className='btn-hr'>Hire Me</button>
                </div>
                {/* item */}
                <div className='services-item-container'>
                    <div className='services-item'>
                        <i className='fa-solid fa-code'></i>
                        <div className='item-desc'>
                            <h3>Web Development</h3>
                            <p>
                                Hello and welcome to my portfolio! You'll find a selection
                                of projects here that demonstrate my knowledge, expertise,
                                and enthusiasm for [specific field or technology]. These
                                projects reflect my journey as a developer and problem solver,
                                from web development to everything in between.
                            </p>
                        </div>
                        <i className='fa-solid fa-desktop'></i>
                        <div className='item-desc'>
                            <h3>Desktop Development</h3>
                            <p>
                                Hello and welcome to my portfolio! You'll find a selection
                                of projects here that demonstrate my knowledge, expertise,
                                and enthusiasm for [specific field or technology]. These
                                projects reflect my journey as a developer and problem solver,
                                from web development to everything in between.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services