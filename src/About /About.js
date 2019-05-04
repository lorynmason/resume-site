import React from 'react';
import { Header } from "../Header/Header";
import profile from "../styles/images/IMG_3990.jpeg";
import img1 from "../styles/images/IMG_0227 2.jpeg";
import img2 from "../styles/images/IMG_0232.jpg";
import img3 from "../styles/images/IMG_0303.jpg";
import img4 from "../styles/images/IMG_0313.jpg";
import img5 from "../styles/images/IMG_0316.jpg";
import img6 from "../styles/images/IMG_0326.jpg";
import img7 from "../styles/images/IMG_0336.jpg";
import img8 from "../styles/images/IMG_0603.jpeg";
import img9 from "../styles/images/IMG_0609.jpeg";
import img10 from "../styles/images/IMG_0828.jpeg";
import img11 from "../styles/images/IMG_0981.jpeg";
import img12 from "../styles/images/IMG_1302.jpeg";
import img13 from "../styles/images/IMG_1388.jpeg";
import img14 from "../styles/images/IMG_1453.jpeg";
import img15 from "../styles/images/IMG_1777.jpeg";
import img16 from "../styles/images/IMG_2906.jpeg";
import img17 from "../styles/images/IMG_3678.jpeg";
import img18 from "../styles/images/IMG_4478.jpg";
import img19 from "../styles/images/IMG_4492.jpeg";

export const About = () => {
  return (
    <section className="about">
      <Header />
      <div className="spacer"></div>
      <div className="grid-container">
        <img src={img2} alt="ME" id="profile"/>
        <article className="bio">
          <p>Motivated developer with significant, real experience
          with current front-end languages and frameworks. Strong analytic and creative ability coupled with excellent team and communication skills.</p>
          <p>Merging degrees in culinary arts and business administration with my experience working in kitchens, I came to software development with strong communication skills in team settings and a desire to keep pushing forward and always be learning. When I’m attacking a problem I patiently study the situation, use my resources, test out theories, and come up with a solution, I’m not afraid to revisit a problem if I come up with a better solution. I’ll obsess over it until I’m satisfied. </p>
        </article>
        <h1>When I'm not coding...</h1>
        <div className="inner-grid">
          <img src={img1} alt=""/>
          <img src={img18} alt=""/>
          {/* <img src={img2} alt=""/> */}
          <img src={img14} alt=""/>

          <img src={img3} alt=""/>
          <img src={img8} alt=""/>
          <img src={img13} alt=""/>
          <img src={img15} alt=""/>

          <img src={img4} alt=""/>
          <img src={img9} alt=""/>
          <img src={img16} alt=""/>

          <img src={img5} alt=""/>
          {/* <img src={img6} alt=""/> */}
          <img src={img12} alt=""/>
          <img src={img10} alt=""/>
          <img src={img11} alt=""/>
          <img src={img17} alt=""/>
          <img src={img7} alt=""/>
          {/* <img src={img19} alt=""/> */}
        </div>
      </div>
      <div className="spacer"></div>
    </section>
  )
}