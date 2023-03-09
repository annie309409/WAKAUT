import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import {Container} from "react-bootstrap";
import { useState} from "react";

const Input = (props)=>{
    const [inputValue, setInputValue] = useState(props.value);

    return(
<Container>
<Form className="d-flex" style={{height:'100px'}}>
  <Form.Label style={{fontWeight:'bold', fontSize: '20px', marginTop: '12px'}}
              size="lg" column lg={2}>{props.label}</Form.Label>

    <Col lg={7}>

    {(!props.placeholder) ?
        <Form.Control style={{padding:'18px', marginLeft:'20px'}}
          value={inputValue} className='Control shadow' column lg={2}
          type="text" onChange={(e) =>
            setInputValue(e.target.value)}/>
            :
        <Form.Control style={{padding:'18px', marginLeft:'20px'}}
          className='Control shadow' column lg={2} type="text"
          placeholder={props.placeholder} />
    }

    </Col>
   {(props.btn) ? (<Button style={{fontWeight:'bold', height:'60px',
       marginLeft:'100px', marginTop:'5px', fontSize: '20px'}}
       className='col-2 shadow' variant={props.variant}>{props.btnvalue}</Button>) : false}
</Form>
</Container>
)
}

export default Input;