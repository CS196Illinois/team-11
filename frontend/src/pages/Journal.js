import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, FormControl, Button } from "react-bootstrap";
import "./Journal.css";
export default class Journal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      studentData: [],
    };
  }


  async componentDidMount() { // Get request to grab all students
    const host = 'http://localhost:3000';
    console.log(host + '/journal');
    try {
      const response = await fetch(host + '/journal');
      const data = await response.json();
      this.setState({
        isLoaded: true,
        studentData: data,
      });
    } catch (e) {
      this.setState({
        isLoaded: true,
      });
    }
  }

  render() {

    /*const { isLoaded, studentData } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var data = [];
      for (var i = 0; i < studentData.length; ++i) {
        data.push(
          <Student
            key={studentData[i].id}
            id={studentData[i].id}
            name={studentData[i].name}
            picture={studentData[i].picture}
            major={studentData[i].major}
            gradYear={studentData[i].gradYear}
            title={studentData[i].title}
            setStudent={this.props.setStudent}
          />
        );
      }*/

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Journal</h3> 

        <div>
        <InputGroup>
         <InputGroup.Prepend>
           <InputGroup.Text>Log your feelings!</InputGroup.Text>
            </InputGroup.Prepend>
           <FormControl as="textarea" aria-label="Log" placeholder="How are you feeling today? What happened during your day?" />
        </InputGroup>
        </div>
        <br></br>
        <Button variant="success">Submit</Button>{' '}
      </div>
    );
  }
}
