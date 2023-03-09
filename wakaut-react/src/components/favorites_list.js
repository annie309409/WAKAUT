import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";

const FavoritesList = (props) => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
        <Form className="d-flex shadow" style={{height:'100px', fontWeight:'bold', fontSize:'25px', textAlign:'center', alignItems: 'center', marginTop:'20px'}}>
            <Form.Label column lg={1}>{props.region}</Form.Label>
            <Form.Label column lg={6}><Link to={'#'} onClick={()=>{ setLgShow(true)}} style={{textDecoration: 'none', color:'#17a1b8'}}>{props.gym}</Link></Form.Label>
            <Form.Label column lg={2}>{props.contact}</Form.Label>
            <Form.Label  column lg={3} style={{textAlign:'end'}}>
                <Button type='button' style={{border:'none', padding: '0 0', color:'white', fontWeight:'bold', fontSize: '25px', backgroundColor: '#17a1b8', width: '40%', marginRight: '10px'}}>삭제</Button>
            </Form.Label>
        </Form>
        </>
    );
}

export default FavoritesList;