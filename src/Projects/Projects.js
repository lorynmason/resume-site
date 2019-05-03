import React from 'react';
import ftfgif from '../styles/images/fromthefarm.gif'
import ppgif from '../styles/images/palettepicker.gif'
import mtgif from '../styles/images/movietrackergif.gif'
import portgif from '../styles/images/portprotection.gif'
import sbgif from '../styles/images/swapibox.gif'
import bookgif from '../styles/images/booktivist.gif'

export const Projects = () => {
  return(
    <section className="projects">
      <img src={ftfgif} alt="gif of my project from the farm"/>
      <img src={ppgif} alt="gif of my project Palette Picker"/>
      <img src={mtgif} alt="gif of my project from movie stalker"/>
      <img src={portgif} alt="gif of the Port Protection Lodge website"/>
      <img src={sbgif} alt="gif of my project swAPI Box"/><img src={bookgif} alt="gif of my project booktivist"/>
    </section>
  )
}