import React, { Component } from "react";
import frustrated from './frustrated.png';
import content from './content.png';
import excited from './excited.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, FormControl, Button } from "react-bootstrap";
import { StyleSheet, Text, View, Image } from 'react';

export default class Journal extends Component {
  render() {
    return (

      <div className = "journal">
          <br></br>
          <br></br>
          <br></br>
          <h3>Journal</h3> 
         <div>

          <h1>How are you feeling?</h1> 
          <h2>Select a plant that represents your current mood</h2>
          
          <div class = "images">
          <button> < img src = {content} alt = "content cactus" onClick={this.buttonSave}
       />  </button>
          
      
          <button>< img src = {frustrated} alt = "frustrated cactus"
       /> </button>

          <button> < img src = {excited} alt = "frustrated cactus"
       /></button>
      </div>

        
        <InputGroup>
         <InputGroup.Prepend>
           <InputGroup.Text>Log your feelings!</InputGroup.Text>
            </InputGroup.Prepend>
           <FormControl as="textarea" aria-label="Log" />
        </InputGroup>
        </div>
        <br></br>
        <Button variant="success">Enter Into Your Journal</Button>{' '}
      

      </div>
        

      
    
    );
  }

  buttonSave() {
            console.log("content button clicked");
          }

}
