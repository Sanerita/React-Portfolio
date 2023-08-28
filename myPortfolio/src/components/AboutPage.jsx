import React from 'react';
import './mediaqueries.css';
import UntitledDesign from '../assets/UntitledDesign.png'


const AboutPage = () => {
    return (
        <div className="about-page">
            <div className='title'> <h2>ABOUT ME</h2> </div>
            <div className='content'>
                <div className="about-container">
                    <div className="about-left">
                        <img
                            src={UntitledDesign}
                            alt="Profile picture"
                            className="about-pic"
                        />
                        <button className="about-button">Learn More</button>
                    </div>
                    <div className="about-right">

                        <p>
                            Thank you for visiting my portfolio! I'm delighted to have you here,
                            and I'd like to take this chance to introduce myself as a software developer. My passion lies in crafting
                            innovative and efficient software solutions. <br />

                            Over the course of my career, I've been fortunate enough to work on a diverse range of projects,
                            each contributing to my personal and professional growth as a developer. I specialize in areas such as
                            web applications and mobile app development, honing my expertise in these domains. My goal is to
                            consistently deliver code of the highest quality, meeting both functional and aesthetic requirements.

                        </p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default AboutPage;
