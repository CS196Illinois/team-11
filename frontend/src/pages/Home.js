import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";
import Mood from "../mood/mood.js";
import "./Home.css";
import frustrated from '../images/frustrated.png';
import content from '../images/content.png';
import excited from '../images/excited.png';

export default class Home extends Component {

 
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userData: [],
    };
  }

  async componentDidMount() { // Get request to grab all students
    const host = 'http://localhost:5000';
    console.log(host + '/home');
    try {
      const uid = 'bmOe4PXt08UaxM1I1REj'
      const response = await fetch(host + '/get-user-data/' + uid);
      const data = await response.json();
      console.log(data)
      this.setState({
        isLoaded: true,
        userData: data,
      });
    } catch (e) {
      this.setState({
        isLoaded: true,
      });
    }
  }




  render() {
    console.log("here");
    const { isLoaded, userData } = this.state;
    if (!isLoaded) {
      console.log("here1");
      return <div>Loading...</div>;
    } else {
      var data = [];
      console.log("here2");
      for (var i = 0; i < userData.length; ++i) {
        var emotion = userData[i].mood;
        console.log(emotion);
        var img = "frustrated.png"
        if (emotion == "frustrated") img = "frustrated.png";
        else if (emotion == "content") img = "content.png";
        else img = "excited.png";
        console.log(img);
        data.push(
          <Mood key={i} mood={userData[i].mood} image={img}/> 
          
        );
      }
      console.log("hello")
    return (
      <div className="home">
        <div className="home-feelings">
          
        <br></br>
        <br></br>
        <br></br>
          <h2 className="feelings">Hello, user. Have you journaled today? </h2>
          <a href="/journal"><Button variant="outline-success">Log my feelings</Button></a>
        </div>
        <br></br>
        <h2>My past week </h2>
          <div>{data}</div>
        <Form inline>
      <FormControl type="text" placeholder="Look up an entry" className="mr-sm-2" />
      <Button variant="outline-success">Go</Button>
    </Form>
    </div>
    );
  }
}
}