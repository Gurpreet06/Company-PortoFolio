import React from 'react';
import logo from './images/aboutMe/aboutMe.svg'
import './index.css'

class AboutUs extends React.Component {
    render() {
        return (
            <div className='auto-center'>
                <section className="about-us">
                    <div className="offerText">
                        <h2> <a href="/index.html" rel="noopener noreferrer" className="flexText">About</a> Us.</h2>
                        <p className="offerP">Choose a plan that works best for your project.</p>
                    </div>

                    <div className="aboutv1">
                        <div>
                            <img src={logo} width="60%" alt='logo' />
                        </div>
                        <div>
                            <p className="aboutv1P">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ratione, beatae
                            accusamus, quisquam consequatur cupiditate similique distinctio odit animi accusantium suscipit
                            rerum at
                        voluptatem! Nobis fugit aut aspernatur magni aperiam?.</p>
                            <div className="aboutv1BlueLine"></div>
                            <h2 className="aboutv1H2">Gurpreet Singh</h2>
                            <p className="aboutv1P2">Manager</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutUs;