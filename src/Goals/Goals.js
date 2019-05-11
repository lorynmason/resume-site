import React, { Component } from 'react';
import { Header } from "../Header/Header";

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          goal: 'career', 
          info: "First I want land a kick ass job. I'm looking for a job where I'll have the opertunity learn as much as possible, I know that sounds cliché but I really want to grow as a developer and be changled."
        }, 
        {
          goal: 'strength', 
          info: 'Be able 10 pullups and be able to climb a V6 by the end of the summer'
        }, 
        {
          goal: 'backend', 
          info: 'Learn more about backend programing, more specialy I really want the learn Python 3, '
        }, 
        {
          goal: 'longterm', 
          info: 'Hike the Pacific Crest Trail. Live satanibly by having a effect house, growing my own food.'
        },
        {
          goal: 'UXdesign', 
          info: 'Hike the Pacific Crest Trail. Live satanibly by having a effect house, growing my own food.'
        },
        {
          goal: 'animations', 
          info: 'Hike the Pacific Crest Trail. Live satanibly by having a effect house, growing my own food.'
        },
        {
          goal: 'rescue', 
          info: 'Adopt as many cats and dogs as possible'
        },
        {
          goal: 'frontend', 
          info: 'Adopt as many cats and dogs as possible'
        }
      ],
      spin: false
    }
  }

  changeGoal = (i) => {
    let newdata = [...this.state.data]
    let select = newdata.splice(i,1)
    newdata.splice(1, 0, ...select)
    this.setState({
      spin: true,
      data: newdata
    }, this.resetspin)
  }

  resetspin = () => {
    setTimeout(() => {
      this.setState({spin: false})
    }, 1001);
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