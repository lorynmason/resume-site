import React from 'react';
import { Header } from "../Header/Header";
import profile from "../styles/images/IMG_3990.jpeg"

export const About = () => {
  return (
    <section className="about">
    <Header />
    <article className="bio">
      <img src={profile} alt="ME"/>
      <p>Motivated developer with significant, real experience
      with current front-end languages and frameworks. Strong analytic and creative ability coupled with excellent team and communication skills.</p>
      <p>Merging degrees in culinary arts and business administration with my experience working in kitchens, I came to software development with strong communication skills in team settings and a desire to keep pushing forward and always be learning. When I’m attacking a problem I patiently study the situation, use my resources, test out theories, and come up with a solution, I’m not afraid to revisit a problem if I come up with a better solution. I’ll obsess over it until I’m satisfied. </p>
    </article>
    </section>
  )
}