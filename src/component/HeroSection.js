import React from 'react';
import {Button} from './Button';
import '../App.css';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className="hero-container">
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <img src="/images/img-home.jpg"/>
            <h1>ADVENTURE</h1>
            <p>AYO JALN-JALAN</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTE
                </Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    GET PLAY <i className='far fa-play-circle'/>
                </Button>

            </div>
        </div>
    )
}

export default HeroSection;