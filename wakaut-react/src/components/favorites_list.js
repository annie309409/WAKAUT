import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import PlaceModal from "../pages/place_modal";
import img from "../assets/workaut.png";

const FavoritesList = (props) => {


    return (
        <Form className="fav-list-wrap d-flex shadow">
            <Form.Label column lg={1}>{props.region}</Form.Label>
            <Form.Label column lg={6}><Link to={'#'} className="gym"
                onClick={props.textClick}>{props.gym}</Link></Form.Label>
            <Form.Label column lg={2}>{props.contact}</Form.Label>
            <Form.Label column lg={3} className="delete-btn-wrap">
                <Button className="delete-btn" type='button'>삭제</Button>
            </Form.Label>
        </Form>
    );
}

export default FavoritesList;