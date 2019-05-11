import React, { Component } from 'react';
import { Header } from "../Header/Header";

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [{goal: 'career', info: 'land a kick ass job'}, {goal: 'strength', info: 'do 10 pullups'}, {goal: 'python', info: 'learn python 3'}, {goal: 'coding', info: 'learn more!'}],
      spin: false
    }
  }

  changeGoal = (i) => {
    let newdata = [...this.state.data]
    let select;
    if (i === 0) {
      select = newdata.splice(0, 1)
    }
    if (i === 1) {
      select = newdata.splice(1, 1)
    }
    if (i === 2) {
      select = newdata.splice(2, 1)
    }
    if (i === 3) {
      select = newdata.splice(3, 1)
    }
    newdata.splice(1, 0, ...select)
    this.setState({
      spin: true,
      data: newdata
    }, this.resetspin)
  }

  resetspin = () => {
    setTimeout(() => {
      this.setState({spin: false})
    }, 2001);
  }

  render () {
    const { data, spin } = this.state
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
          {data[1].info}
        </div>
      </section>
    )
  }
}

export default Goals