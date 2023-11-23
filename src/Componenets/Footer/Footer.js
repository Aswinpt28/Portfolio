import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div>
                <h3 className='h3'>Contact Me</h3>
                <p className='p'>
                    Phone No - 8138847015
                    |
                    E-Mail -aswinptoffical@gmail.com
                </p>

            </div >
            <hr className='hr' />
            <ul className='footer-social-media'>
                <li>
                    <a href='https://github.com/Aswinpt28'>
                        <i className='fa-brands fa-github'></i>
                    </a>
                </li>

                <li>
                    <a href='https://www.linkedin.com/in/aswinpt/'>
                        <i className='fa-brands fa-linkedin'></i>
                    </a>
                </li>
            </ul>
        </footer >
    )
}

export default Footer