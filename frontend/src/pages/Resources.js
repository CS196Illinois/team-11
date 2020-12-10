import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import "./Resources.css";
import "./Home.css";
export default class Resources extends Component {
  render() {
    return (
      <div className='resources'>
        <br></br>
        <br></br>
        <br></br>
        <div className='cardGroup'>
          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>MentalHealth.gov</Card.Title>
              <Card.Text>
                Has a host of resources specific to different mental health problems, as well as hotlines and ways to find local organizations.
              </Card.Text>
              <a target="_blank" href="https://www.mentalhealth.gov/">Go to Website</a>
            </Card.Body>
            </Card>
          </div>
          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>MHR</Card.Title>
              <Card.Text>
              A nonprofit organization offering community-based mental health services to recovering adults
              </Card.Text>
              <a target="_blank" href="http://www.mhresources.org/">Go to Website</a>
            </Card.Body>
            </Card>
          </div>
          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>MHR</Card.Title>
              <Card.Text>
              A nonprofit organization offering community-based mental health services to recovering adults
              </Card.Text>
              <a target="_blank" href="http://www.mhresources.org/">Go to Website</a>
            </Card.Body>
            </Card>
          </div>
          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>MHR</Card.Title>
              <Card.Text>
              A nonprofit organization offering community-based mental health services to recovering adults
              </Card.Text>
              <a target="_blank" href="http://www.mhresources.org/">Go to Website</a>
            </Card.Body>
            </Card>
          </div>
        </div>
        <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    );
  }
}
