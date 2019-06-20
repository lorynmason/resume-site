import React, { Component } from 'react';
import { Header } from "../Header/Header";
import ftfgif from '../styles/images/fromthefarm.gif';
import ppgif from '../styles/images/palettepicker.gif';
import mtgif from '../styles/images/movietrackergif.gif';
import portgif from '../styles/images/portprotection.gif';
import sbgif from '../styles/images/swapibox.gif';
import bookgif from '../styles/images/booktivist.gif';
import githubgif from '../styles/images/github.gif';

class Projects extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          name:'Palette Picker',
          description: 'Solo project, completed in 5 days. Palette Picker allows users to generate a random color palette and save it.',
          tech: 'jQuery, Node.js, Express, Knex, SQL, Heroku, TravisCI',
          github: 'https://github.com/lorynmason/Palette-Picker',
          liveSite: 'https://lm-palette-picker.herokuapp.com',
          img: ppgif,
          alt: 'gif of my project Palette Picker'
        },
        {
          name:'from the farm',
          description: 'Group project, MVP completed in 8 days. From the Farm connects farm- ers directly with retailers, cutting out the middleman distributor, making the farm to table movement more feasible.',
          tech: 'React, Router, Redux, Sass, GIT, Jest, Enzyme, TravisCI',
          github: 'https://github.com/lorynmason/from-the-farm',
          liveSite: 'https://from-the-farm.herokuapp.com/',
          img: ftfgif,
          alt: 'gif of my project from the farm'
        },
        {
          name:'Booktivist',
          description: 'Solo project, completed in 6 days. Booktivist is a book recommendation app for activist, using the Taste Dive API.',
          tech: 'React, Redux, Sass, Router, GIT, Jest, Enzyme',
          github: 'https://github.com/lorynmason/Booktivist',
          liveSite: 'https://booktivist.herokuapp.com/',
          img: bookgif,
          alt: 'gif of my project booktivist'
        },
        {
          name:'Movie Stalker',
          description: 'Group project, completed in 10 days. Movie Stalker is an app for horror movie fans to track their favorite movies.',
          tech: 'React, Router, Redux, Sass, GIT, Jest, Enzyme',
          github: 'github.com/lorynmason/movie-stalker',
          liveSite: '',
          img: mtgif,
          alt: 'gif of my project from movie stalker'
        },
        {
          name:'SWAPI Box',
          description: 'Paired project, completed in 12 days. Star Wars API base app, for true Star Wars fans to track favorite Characters, Planets, and Vehicles.',
          tech: 'React, Sass, Router, GIT, Jest, Enzyme',
          github: 'github.com/lorynmason/SWAPI-BOX',
          liveSite: 'https://lm-swapi-box.herokuapp.com/',
          img: sbgif,
          alt: ''
        },
        {
          name:'Port Protection Lodge',
          description: 'Solo project, website built for a fishing lodge in Alaska',
          tech: 'Sass, React, Router V4',
          github: '',
          liveSite: 'https://portprotectionlodge.herokuapp.com/',
          img: portgif,
          alt: 'gif of the Port Protection Lodge website'
        },
        {
          name:'More projects on my github',
          description: '',
          tech: '',
          github: 'https://github.com/lorynmason?tab=repositories',
          liveSite: '',
          img: githubgif,
          alt: 'gif of my github repos'
        },
      ],
      currentSlide: 0
    }
  }

  changeSlide = (i) => {
    const { data, currentSlide } = this.state
    let newIdex = currentSlide+i
    if( i !== 1 && i !== -1) {
      newIdex = i
    }
    if(newIdex === data.length) {
      newIdex = 0
    }
    if(newIdex < 0) {
      newIdex = data.length - 1
    }
    this.setState({
      currentSlide: newIdex
    })
  }

  render(){
    const { data, currentSlide } = this.state
    const slide = data[currentSlide]
    const indicators = data.map( (s, i) => {
      if (i === currentSlide) {
        // console.log(i)
      return <div className="indicator" id="active" onClick={()=> this.changeSlide(i)}></div>
      }
      return <div className="indicator" onClick={()=> this.changeSlide(i)}></div>
    })
  
    return (
      <section className="projects">
      <Header/>
      <div className="spacer"></div>
      <section id='carousel'>
        <i className="fas fa-chevron-left" onClick={()=> this.changeSlide(-1)}></i>
        <div className='slide'>
          <img src={slide.img} alt={slide.alt}/>
          <div className="card-info">
            <h1>{slide.name}</h1>
            <p>{slide.description}</p>
            <p>{slide.tech ? "Tech: " : ''}{slide.tech}</p>
            {slide.github ? <a href={slide.github}>Github</a> : ''}
            {slide.liveSite ? <a href={slide.liveSite}>Live Site</a> : ''}
          </div>
          <i className="fas fa-chevron-right" onClick={()=> this.changeSlide(1)}></i>
        </div>
      </section>
      <div className='indicators'>{indicators}</div>
    </section>
    )
  }
}

export default Projects