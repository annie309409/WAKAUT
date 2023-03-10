import '../styles/boot-added.css';
import {Container,Form} from 'react-bootstrap';
import Title from '../components/title'
import Paging from "../components/pagenation";
import React, {useState} from "react";
import FavoritesList from "../components/favorites_list";
import PlaceModal from "./place_modal";
import img from "../assets/workaut.png";

const Favorites = () => {

    return(

        <>
        <Container style={{maxWidth:'700px'}}>
            <Title title='즐겨찾기 목록'/>
            <hr style={{backgroundColor:'#17a1b8', height:'3px'}}/>
            <Form className="d-flex" style={{height:'40px', fontWeight:'bold', fontSize:'16px', textAlign:'center', marginTop: '-15px'}}>
                <Form.Label column lg={1}>지역</Form.Label>
                <Form.Label column lg={6}>시설명</Form.Label>
                <Form.Label column lg={2}>연락처</Form.Label>
            </Form>

            <FavoritesList region='성남시' gym='언더아머 단속반 성남지부(3대 500이하 클릭시 IP추적)' contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='의정부시' gym='언더아머 단속반 의정부지부(3대 500이하 클릭시 IP추적)' contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='화성시' gym='언더아머 단속반 화성지부(3대 500이하 클릭시 IP추적)' contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='안산시' gym='언더아머 단속반 안산지부(3대 500이하 클릭시 IP추적)' contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>

            <Paging cnt={10}/>
        </Container>
        </>
    )
}

export default Favorites