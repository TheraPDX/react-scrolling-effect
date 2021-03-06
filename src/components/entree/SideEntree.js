import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import './Entree.css';
import dishPic from '../images/SideEntree.png';

class SideEntree extends Component {
  render() {
    return (
      <Motion ref="entree" style={{
        x: spring(this.props.inView ? -200 : (this.props.partlyInView ? -180 : -150)),
        y: spring(this.props.initialAnimation ? 100 : 150),
        time: spring(this.props.initialAnimation ? 1 : 0),
      }}>
      {({x, y, time}) =>
         <div className="SideEntree" style={{
           left: `${x}px`,
           top: `${y}px`,
           WebkitTransitionDuration: '0.5s',
           transitionDuration: '0.5s',
           WebkitTransitionTimingFunction: 'ease-out',
           transitionTimingFunction: 'ease-out',
           WebkitTransitionDelay: `${time}s`,
           transitionDelay: `${time}s`,
         }}>
           <img src={dishPic}/>
         </div>
       }
      </Motion>
    );
  }
}

export default SideEntree;