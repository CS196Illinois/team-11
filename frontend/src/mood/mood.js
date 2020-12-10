import React, { Component } from "react";
import frustrated from '../images/frustrated.png';
import content from '../images/content.png';
import excited from '../images/excited.png';

export default class Mood extends Component {
  constructor(props) {
    super(props);
    this.mood = props.mood;
    this.image = props.image;
  }
  render() {
    var img;
    if(this.image === "frustrated.png") img = frustrated;
    else if(this.image === "excited.png") img = excited;
    else if(this.image === "content.png") img = content;
    return (<div className="icon-main">
    <img src={img} width="130vw" alt="icon"/>
    <p>{this.props.mood}</p>
  </div>);
  }
}