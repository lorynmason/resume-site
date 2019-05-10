import React, { Component } from 'react';
import { Header } from "../Header/Header";

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [{goal: 'job', info: 'land a kick ass job'}, {goal: 'pullups', info: 'do 10 pullups'}, {goal: 'python', info: 'learn python 3'}, {goal: 'coding', info: 'learn more!'}],
      show: 0,
      spin: false
    }
  }

  changeGoal = (i) => {
    this.setState({
      show: i,
      spin: true
    }, this.resetspin)
  }

  resetspin = () => {
    setTimeout(() => {
      this.setState({spin: false})
    }, 4001);
  }

  render () {
    const { data, show, spin } = this.state
    const goals = data.map((goal, i) => {
      const className = `goal goal${i + 1}`
      return (
        <div className={className} key={i+1} onClick={() => this.changeGoal(i)}>{goal.goal}</div>
      )
    })
    let className;
    spin ? className = 'center spinner' : className = 'center';
    return (
      <section>
        <Header/>
        <div className="spacer"></div>
        <div className="goals">
          <div className={className}>
            {goals}
          </div>  
        </div>
        <div className="info">
          {data[show].info}
        </div>
      </section>
    )
  }
}

export default Goals