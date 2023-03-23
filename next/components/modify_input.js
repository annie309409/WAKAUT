import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import {Container} from "react-bootstrap";
import { useState} from "react";

const Input = (props)=>{
    const [inputValue, setInputValue] = useState(props.value);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        props.onChange(e.target.value);
    };

    return(
        <Container>
            <Form className="mod-frm d-flex">
                <Form.Label className="mod-type"
                            size="lg" column lg={2}>{props.label}</Form.Label>
                <Col lg={7}>
                    {(!props.placeholder)
                        ?
                        <Form.Control className='mod-input Control shadow'
                                      value={inputValue}
                                      lg={2}
                                      type="text"
                                      onChange={handleChange}/>
                        :
                        <Form.Control className='mod-input Control shadow'
                                      lg={2}
                                      type="password"
                                      placeholder={props.placeholder}
                                      onChange={handleChange}/>
                    }
                </Col>
                {(props.btn)
                    ?
                    (<Button className='mod-ipbtn col-2 shadow'
                             variant={props.variant}>{props.btnvalue}</Button>)
                    :
                    false}
            </Form>
        </Container>
    )
}

export default Input;