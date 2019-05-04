import React from 'react';
import { Header } from "../Header/Header";
import ftfgif from '../styles/images/fromthefarm.gif';
import ppgif from '../styles/images/palettepicker.gif';
import mtgif from '../styles/images/movietrackergif.gif';
import portgif from '../styles/images/portprotection.gif';
import sbgif from '../styles/images/swapibox.gif';
import bookgif from '../styles/images/booktivist.gif';
import githubgif from '../styles/images/github.gif';
import Carousel from 'nuka-carousel';

export const Projects = () => {
  const width = {
    "width": "90%"
  }
  return(
    <section className="projects">
      <Header/>
      <div className="spacer"></div>
      <Carousel id='carousel' style={width}>
        <div className='slide'>
          <img src={ftfgif} alt="gif of my project from the farm"/>
          <div className="card-info">
            <h1>from the farm</h1>
            <p>Group project, MVP completed in 8 days. From the Farm connects farm- ers directly with retailers, cutting out the middleman distributor, making the farm to table movement more feasible.</p>
            <p>Tech: React, Router, Redux, Sass, GIT, Jest, Enzyme, TravisCI</p>
            <a href="https://github.com/lorynmason/from-the-farm">Github</a>
            <a href="https://from-the-farm.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className='slide'>
          <img src={ppgif} alt="gif of my project Palette Picker"/>
          <div className="card-info">
            <h1>Palette Picker</h1>
            <p>Solo project, completed in 5 days. Palette Picker allows users to generate a random color palette and save it.</p>
            <p>Tech: jQuery, Node.js, Express, Knex, SQL, Heroku, TravisCI</p>
            <a href="https://github.com/lorynmason/Palette-Picker">Github</a>
            <a href="https://lm-palette-picker.herokuapp.com">Live Site</a>
          </div>
        </div>
        <div className='slide'>
          <img src={bookgif} alt="gif of my project booktivist"/>
          <div className="card-info">
            <h1>Booktivist</h1>
            <p>Solo project, completed in 6 days. Booktivist is a book recommendation app for activist, using the Taste Dive API.</p>
            <p>Tech: React, Redux, Sass, Router, GIT, Jest, Enzyme</p>
            <a href="https://github.com/lorynmason/Booktivist">Github</a>
            <a href="https://booktivist.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className='slide'>
          <img src={mtgif} alt="gif of my project from movie stalker"/>
          <div className="card-info">
            <h1>Movie Stalker</h1>
            <p>Group project, completed in 10 days. Movie Stalker is an app for horror movie fans to track their favorite movies.</p>
            <p>Tech: React, Router, Redux, Sass, GIT, Jest, Enzyme</p>
            <a href="github.com/lorynmason/movie-stalker">Github</a>
          </div>
        </div>
        <div className='slide'>
          <img src={sbgif} alt="gif of my project SWapi Box"/>
          <div className="card-info">
            <h1>SWAPI Box</h1>
            <p>Paired project, completed in 12 days. Star Wars API base app, for true Star Wars fans to track favorite Characters, Planets, and Vehicles.</p>
            <p>Tech: React, Sass, Router, GIT, Jest, Enzyme</p>
            <a href="github.com/lorynmason/SWAPI-BOX">Github</a>
            <a href="https://lm-swapi-box.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className='slide'>
          <img src={portgif} alt="gif of the Port Protection Lodge website"/>
          <div className="card-info">
            <h1>Port Protection Lodge</h1>
            <p>Solo project, website built for a fishing lodge in Alaska</p>
            <p>Tech: Sass, React, Router V4</p>
            <a href="https://portprotectionlodge.herokuapp.com/">Live Site</a>
          </div>
        </div>
        <div className='slide'>
            <img src={githubgif} alt="gif of my github repos"/>
            <div className="card-info">
              <h1>More projects on my github</h1>
              <a href="https://github.com/lorynmason?tab=repositories">Github</a>
            </div>
        </div>
      </Carousel>
    </section>
  )
}