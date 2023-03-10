import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import PlaceModal from "../pages/place_modal";
import img from "../assets/workaut.png";

const FavoritesList = (props) => {
    const [lgShow, setLgShow] = useState(false);
    let addr = '경기도 김포시 대평원거리 11-43';
    let des = '#씨름 #강호동 #아는형님';

    return (
        <>
        <Form className="d-flex shadow" style={{height:'60px', fontSize:'12px', textAlign:'center', alignItems: 'center', marginTop:'10px'}}>
            <Form.Label column lg={1}>{props.region}</Form.Label>
            <Form.Label column lg={6}><Link to={'#'} onClick={()=>{ setLgShow(true)}} style={{textDecoration: 'none', color:'#17a1b8'}}>{props.gym}</Link></Form.Label>
            <Form.Label column lg={2}>{props.contact}</Form.Label>
            <Form.Label  column lg={3} style={{textAlign:'end'}}>
                <Button type='button' style={{border:'none', height:'50%', color:'white', fontWeight:'bold', fontSize: '12px', backgroundColor: '#17a1b8', width: '30%', marginRight: '10px'}}>삭제</Button>
            </Form.Label>
        </Form>
    <PlaceModal lgShow={lgShow} setLgShow={setLgShow} score={3} addr={addr} title={props.gym} des={des} img={img} />

        </>
    );
}

export default FavoritesList;