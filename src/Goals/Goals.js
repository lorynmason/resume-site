import React, { Component } from 'react';
import { Header } from "../Header/Header";

class Goals extends Component {
  constructor(){
    super()
    this.state = {
      data: [
         {
          goal: 'fitness', 
          info: 'Be able 10 pullups and be able to climb a V6 by the end of the summer'
        }, 
        {
          goal: 'career', 
          info: "First I want land a kick ass job. I'm looking for a job where I'll have the opertunity learn as much as possible, I know that sounds cliché but I really want to grow as a developer and be changled. until I land a job I'll coding everyday, and learning new tech"
        }, 
        {
          goal: 'backend', 
          info: 'Learn more about backend programing, more specialy I really want the learn Python 3, graphQL, basically anything I can learn to build up my backend knowledge.'
        }, 
        {
          goal: 'longterm', 
          info: 'Hike the Pacific Crest Trail. Live satanibly by having an Ultra-efficient home, growing my own food, and using my bike as my main mode of transportation.'
        },
        {
          goal: 'design', 
          info: 'Explore design'
        },
        {
          goal: 'animation', 
          info: 'I really want to get better at css animations'
        },
        {
          goal: 'rescue', 
          info: 'Adopt as many cats and dogs as possible, well what i really want to do is forster rescue animals until they find their furever home'
        },
        {
          goal: 'frontend', 
          info: 'I want to continue to learn more frontend frameworks, and increase my JavaScript knowledge'
        }
      ],
      spin: false,
      showInfo: true
    }
  }

  changeGoal = (i) => {
    let newdata = [...this.state.data]
    let select = newdata.splice(i,1)
    newdata.splice(1, 0, ...select)
    this.setState({
      spin: true,
      data: newdata,
      showInfo: true
    }, this.resetspin)
  }

  resetspin = () => {
    setTimeout(() => {
      this.setState({spin: false})
    }, 1001);
  }

  resetInfo = () => {
    this.setState({showInfo: false})
  }

  render () {
    const { data, spin, showInfo } = this.state
    const goals = data.map((goal, i) => {
      const className = `goal goal${i + 1}`
      return (
        <div className={className} key={i+1} onMouseDown={this.resetInfo}
        onMouseUp={() => this.changeGoal(i)}>{goal.goal}</div>
      )
    })
    let className;
    spin ? className = 'center spinner' : className = 'center';
    return (
      <section>
        <Header/>
        <div className="spacer"></div>
        <div className="container">
          <div className="goals">
            <div className={className}>
              {goals}
            </div>  
          </div>
          <div className={showInfo ? "info" : "hide"}>
            <h1>GOAL: <span>{data[1].goal}</span></h1>
            {data[1].info}
          </div>
        </div>
      </section>
    )
  }
}

export default Goals