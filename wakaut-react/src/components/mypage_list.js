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
    {(props.icon2)
        ?
    <div className='mypg-list-container d-flex'>
        <Form className="mypg-list-wrapper shadow col-lg-10">
            <Form.Label column lg={3}><BsIcon className="icon"/></Form.Label>
            <Form.Label column lg={6} className="mypg-list-name-wrap">
                <Link to={props.link} className="mp-list-link">{props.type}</Link>
            </Form.Label>
            <Form.Label column lg={3}>
                <Link to={props.link} className="mypg-link-ic"><BsChevronCompactRight /></Link>
            </Form.Label>
        </Form>
    </div>
        :
    <div className='mypg-list-container d-flex'>
        <Form className="logout shadow col-lg-10">
            <Form.Label column lg={3}><AiIcon  /></Form.Label>
            <Form.Label column lg={6} className="logout-label">
                <Link to='/' className="logout-link">로그아웃</Link>
            </Form.Label>
        </Form>
    </div>
    }
</>
    )
}

export default MyPageList