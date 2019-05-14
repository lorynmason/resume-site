import React, { useState } from 'react';
import { Header } from "../Header/Header";

export const Skills = () => {
  const [play, playScroll] = useState(false);
  return (
    <section className="skills-page">
      <Header/>
      <section className="skills">
        <button 
          title="Play/pause scroll animation" 
          className={play ? "pause-btn btn" : "play-btn btn"} 
          onClick={() => playScroll(!play)}
        >
          {/* <i className={play ? "fas fa-pause" : "fas fa-play"}></i> */}
          {play ? "pause" : "play"}
        </button>
        <ul className={play ? "play" : "pause"}>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SASS/SCSS</li>
          <li>JAVASCRIPT</li>
          <li>JQUERY</li>
          <li>REACT</li>
          <li>REACT ROUTER V4</li>
          <li>REACT REDUX</li>
          <li>NODE.JS</li>
          <li>EXPRESS</li>
          <li>PostgreSQL</li>
          <li>PYTHON 3</li>
          <li>GIT MERGE/REBASE WORKFLOW</li>
          <li>AGILE PROCESSES</li>
          <li>TEST DRIVEN DEVELOPMENT</li>
          <li>PAIR PROGRAMMING</li>
          <li>RESPONSIVE DEIGN</li>
          <li>RESTful APIs</li>
          <li></li>
        </ul>
      </section>
      <div className='bottom'></div>
    </section>
  )
}