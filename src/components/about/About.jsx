import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg"

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">My name is Kevin, a rising high school junior from NC, US. 
                            I am a beginner in website development and have had some decent experience in competitive 
                            programming using language Java and C++. Furthermore, I learn and practice Machine 
                            Learning with Python on Kaggle.
                        </p>
                    </div>

                    <div className="about__skills grid">

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">CP Algorithm</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage Algorithm"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Machine Learning (Python)</h3>
                                <span className="skills__number">10%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage Machine"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Website Development</h3>
                                <span className="skills__number">20%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage Development"></span>
                            </div>
                        </div>
                
                    </div>

                </div>
            </div>

        </section>
    )
}
  
  export default About;