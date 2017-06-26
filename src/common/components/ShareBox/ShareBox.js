import React from 'react';
import { Form, FormGroup, Button, FormControl, ControlLabel } from 'react-bootstrap';
const ShareBox = (props) => {
  return (<div style = {{backgroundColor:"#ffffff"}}>
    <Form horizontal>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入標題</ControlLabel>
        <FormControl
          type="text"
          placeholder="Enter text"
          defaultValue={props.name}
          onChange={props.onChangeNameInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入內容</ControlLabel>
        <FormControl 
          componentClass="textarea" 
          placeholder="textarea" 
          defaultValue={props.description}          
          onChange={props.onChangeDescriptionInput}
        />
        <FormControl.Feedback />
      </FormGroup>
      <FormGroup
        controlId="formBasicText"
      >
        <ControlLabel>請輸入圖片網址</ControlLabel>
        <FormControl 
          type="text"
          placeholder="Enter text"
          defaultValue={props.imagePath}
          onChange={props.onChangeImageUrl}
        />
        <FormControl.Feedback />
      </FormGroup>
      <Button 
        onClick={props.onPostSubmit} 
        bsStyle="success" 
        bsSize="large" 
        block
      >
        提交送出
      </Button>
    </Form>
            
  </div>);
};

export default ShareBox;