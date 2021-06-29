import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src={require('../videos/video-1.mp4').default} autoPlay loop muted /> */}
            <h1>video</h1>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Get Start
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
