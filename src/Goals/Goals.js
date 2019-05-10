import React, { Component } from 'react';
import { Header } from "../Header/Header";

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [{goal: 'job', info: 'land a kick ass job'}, {goal: 'pullups', info: 'do 10 pullups'}, {goal: 'python', info: 'learn python 3'}, {goal: 'coding', info: 'learn more!'}],
      show: 0
    }
  }

  changeGoal = (i) => {
    this.setState({
      show: i
    })
  }

  render () {
    const data = this.state.data
    const goals = data.map((goal, i) => {
      const className = `goal goal${i + 1}`
      return (
        <div className={className} onClick={() => this.changeGoal(i)}>{goal.goal}</div>
      )
    })
    return (
      <section>
        <Header/>
        <div className="spacer"></div>
        <div className="goals">
          {goals}
        </div>
        <div className="info">
          {data[this.state.show].info}
        </div>
      </section>
    )
  }
}

export default Goals