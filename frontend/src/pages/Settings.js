import React, { Component } from "react";
import profilepic from './profilepic.jpg';
import selectedplant from './selected-plant.jpg';
import "./Settings.css";
import { Button, InputGroup, Form, FormControl, Row } from "react-bootstrap";
export default class Settings extends Component {
  render() {
    return (
      <div className="Settings">

        <div style={{
        marginTop: 80,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>

    
        <img src={profilepic} alt="profpic" width="200" height="200"></img>
        
        
      </div>

      <div style={{
        marginTop: 20,
        display: "block",
        textAlign: "center"
          
      }
      }>
      <h3>[User's Name]</h3>
      </div>

      <div style={{
        marginTop: 20,
        display: "block",
        textAlign: "right",
        marginInlineEnd: 350
          
      }
      }>
      <h3>[email]</h3>
      </div>
      

      <div style={{
        display: "flex",
        justifyContent:"space-around"
      }}>
           <img src={selectedplant} alt="plantpic" width="350" height="350"></img>
           <div style={{
             display: "block",
             marginTop: 30
           }}>
           <Button>Change Email</Button>
           </div>
           <div style={{
             display: "block",
             marginTop: 30
           }}>
           <Button>Change Password</Button>
           </div>
           
           
           
      </div>
      <div style={{
        marginLeft: 180
      }}>
        <h3>Selected plant</h3>
      </div>

      <div style={{
        marginTop: 2,
        display: "block",
        marginLeft: 200
        
    
          
      }
      }>
      <Button>Change plant</Button>
      
      
      </div>

    


      </div>

    );
  }
}
