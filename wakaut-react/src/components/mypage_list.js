import {Form} from "react-bootstrap";
import {BsChevronCompactRight} from "react-icons/bs";
import {Link} from "react-router-dom";
import React from "react";
import { BsIcon } from "react-icons/bs"
import { AiIcon } from "react-icons/ai"

const MyPageList = (props) => {
    const BsIcon = props.bsicon;
    const AiIcon = props.aiicon;

    return(
<>
    {(props.icon2) ?
    <div  className='d-flex' style={{justifyContent:'center'}}>
        <Form className="shadow col-lg-10" style={{display: 'flex', height:'60px', fontWeight:'bold', fontSize:'18px', textAlign:'center', alignItems: 'center',marginTop:'10px', borderRadius:'6px'}}>
            <Form.Label column lg={3}><BsIcon style={{color:'#17a0b8'}}/></Form.Label>
            <Form.Label column lg={6} style={{textAlign: 'start'}}><Link to={props.link} style={{textDecoration: 'none', color:'black'}}>{props.type}</Link></Form.Label>
            <Form.Label column lg={3}><Link to='#' style={{textDecoration: 'none', color:'black'}}><BsChevronCompactRight /></Link></Form.Label>
        </Form>
    </div>
:
    <div  className='d-flex' style={{justifyContent:'center'}}>
        <Form className="shadow col-lg-10" style={{display: 'flex', height:'60px', fontWeight:'bold', fontSize:'18px', textAlign:'center', alignItems: 'center',marginTop:'10px', background:'#17a0b8', color:'white', borderRadius:'6px'}}>
            <Form.Label column lg={3}><AiIcon  /></Form.Label>
            <Form.Label column lg={6} style={{textAlign: 'center'}}><Link to='/' style={{textDecoration: 'none', color:'white'}}>로그아웃</Link></Form.Label>
        </Form>
    </div>
    }
</>
    )
}

export default MyPageList