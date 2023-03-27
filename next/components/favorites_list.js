import {Button, Form} from "react-bootstrap";
import React from "react";


const FavoritesList = (props) => {
    const handleDelete = (fid) => {
        props.onClick(fid)
    };
    return (
        <>
            {props.lists.map((list) => (
                (list.btn === null)
                    ?
                    <Form className="fav-th d-flex">
                        <Form.Label className="col-2">{list.region}</Form.Label>
                        <Form.Label className="col-4">{list.gym}</Form.Label>
                        <Form.Label className="col-3">{list.contact}</Form.Label>
                    </Form>

                    :

                    <Form className="fav-list-wrap d-flex shadow" key={props.fid}>
                        <Form.Label className="col-2">{(list.region === ''? 'ㅡ' : list.region)}</Form.Label>
                        <Form.Label className="col-4 gym">{list.gym}</Form.Label>
                        <Form.Label className="col-3">{list.contact === ''? 'ㅡ' : list.contact}</Form.Label>
                        <Form.Label className="delete-btn-wrap col-3"><Button className="delete-btn" type='button'
                        onClick={()=>{handleDelete(list.fid)}}>{list.btn}</Button></Form.Label>
                    </Form>
            ))}
        </>
    );
}

export default FavoritesList;