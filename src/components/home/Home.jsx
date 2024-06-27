import React from 'react'
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderLinks from './headerlinks/HeaderLinks';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" />

                <h1 className="home__name">Kevin</h1>

                <span className="home__education">
                    Competitive Programming & Website Development
                </span>

                <HeaderLinks />

                <ScrollDown />
                
            </div>
        </section>
    )
}
  
  export default Home;