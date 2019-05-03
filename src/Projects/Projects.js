import React from 'react';
import { Header } from "../Header/Header";
import ftfgif from '../styles/images/fromthefarm.gif';
import ppgif from '../styles/images/palettepicker.gif';
import mtgif from '../styles/images/movietrackergif.gif';
import portgif from '../styles/images/portprotection.gif';
import sbgif from '../styles/images/swapibox.gif';
import bookgif from '../styles/images/booktivist.gif';
import Carousel from 'nuka-carousel';

export const Projects = () => {
  return(
    <section className="projects">
      <Header/>
      <Carousel id='carousel'>
        <div className='slide'>
          <img src={ftfgif} alt="gif of my project from the farm"/>
          <h1>from the farm</h1>
        </div>
        <div className='slide'>
          <img src={ppgif} alt="gif of my project Palette Picker"/>
        </div>
        <div className='slide'>
          <img src={mtgif} alt="gif of my project from movie stalker"/>
        </div>
        <div className='slide'>
          <img src={portgif} alt="gif of the Port Protection Lodge website"/>
        </div>
        <div className='slide'>
          <img src={sbgif} alt="gif of my project swAPI Box"/>
        </div>
        <div className='slide'>
          <img src={bookgif} alt="gif of my project booktivist"/>
        </div>
      </Carousel>
      {/* <section className="projects">
        <img src={ftfgif} alt="gif of my project from the farm"/>
        <img src={ppgif} alt="gif of my project Palette Picker"/>
        <img src={mtgif} alt="gif of my project from movie stalker"/>
        <img src={portgif} alt="gif of the Port Protection Lodge website"/>
        <img src={sbgif} alt="gif of my project swAPI Box"/><img src={bookgif} alt="gif of my project booktivist"/>
      </section> */}
    </section>
  )
}