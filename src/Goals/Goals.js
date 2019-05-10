import React, { Component } from 'react';
import { Header } from "../Header/Header";
import { Card } from "../Card/Card"

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [{goal: 'job', info: 'land a kick ass job'}, {goal: 'pullups', info: 'do 10 pullups'}, {goal: 'python', info: 'learn python 3'}, {goal: 'coding', info: 'learn more!'}],
      show: 0
    }
  }

  render () {
    const data = this.state.data
    const goals = data.map((goal, i) => {
          return <Card title={goal.goal} info={goal.info} i={i}/>
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