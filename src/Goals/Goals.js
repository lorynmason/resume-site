import React from 'react';
import { Header } from "../Header/Header";

export const Goals = () => {
  const style1 = {
    "offset": 0,
    "value": '25%',
    "background": 'green'
  }
  return (
    <section>
      <Header/>
      <div className="spacer"></div>
      <div className="goals">
        <div className="goal goal1">job</div>
        <div className="goal goal2">pull ups</div>
        <div className="goal goal3">python</div>
        <div className="goal goal4">coding</div>
      </div>
    </section>
  )
}