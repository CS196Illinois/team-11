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
           <FormControl as="textarea" aria-label="Log" />
        </InputGroup>
        </div>
        <br></br>
        <Button variant="success">Submit</Button>{' '}
      </div>
        

      
    
    );
  }
}
