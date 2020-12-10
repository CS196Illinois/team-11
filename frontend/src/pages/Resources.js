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
              <Card.Title>Crisis Text Line</Card.Title>
              <Card.Text>
              Text 741-741 to connect with a trained crisis counselor to receive crisis support via text message.
              </Card.Text>
              <a target="_blank" href="https://www.crisistextline.org/">Go to Website</a>
            </Card.Body>
            </Card>
          </div>

          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>National Suicide Prevention Lifeline</Card.Title>
              <Card.Text>
              Call 800-273-TALK (8255) to speak with a trained crisis counselor.
              </Card.Text>
              <a target="_blank" href="https://suicidepreventionlifeline.org/">Go to Website</a>
            </Card.Body>
            </Card>
            </div>

          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Champaign-Urbana Crisis Line</Card.Title>
              <Card.Text>
              Call (217) 359-4141 for a similar resource to the national crisis line but for those in the local area. This one is especially useful in that a crisis counselor can help you access local resources or help.
              </Card.Text>
            </Card.Body>
            </Card>

            <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>National Domestic Violence Hotline</Card.Title>
              <Card.Text>
              Call 800-799-SAFE (7233) to speak with trained experts who provide confidential support to anyone experiencing domestic violence or seeking resources and information.
              </Card.Text>
            </Card.Body>
            </Card>

          <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>National Sexual Assault Hotline</Card.Title>
              <Card.Text>
              Call 800-656-HOPE (4673) to connect with a trained staff member from a sexual assault service provider in your area that offers access to a range of free services. Crisis chat support is also available at Online Hotline.
              </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Disaster Distress Helpline</Card.Title>
              <Card.Text>
              Call 1-800-985-5990 or text “TalkWithUs” to 66746. The disaster distress helpline provides immediate crisis counseling for people who are experiencing emotional distress related to any natural or human-caused disaster. The helpline is free, multilingual, confidential, and available 24 hours a day, seven days a week.line.
              </Card.Text>
            </Card.Body>
            </Card>
            </div>

        <div className='card'>
          <Card border ="success" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Rosecrance Substance/Mental Health Helpline</Card.Title>
              <Card.Text>
               Call 1-866-330-8729. This group does mental health triage at hospitals and offers partial hospitalization, mental health recovery services, and recovery living. They also have substance abuse centers (with one located in Champaign).
              </Card.Text>
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
