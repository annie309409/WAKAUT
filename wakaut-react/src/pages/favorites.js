import '../styles/boot-added.css';
import {Container,Form} from 'react-bootstrap';
import Title from '../components/title'
import Paging from "../components/pagenation";
import React, {useState} from "react";
import FavoritesList from "../components/favorites_list";
import img from "../assets/workaut.png";
import PlaceModal from "./place_modal";

const Favorites = () => {
    const [lgShow, setLgShow] = useState(false)
    let addr = '경기도 김포시 대평원거리 11-43';
    let des = '#용인 #호랑이 #태권';
    const title = "용인 태권도장 성남지점"
    return(

        <>
        <Container className="favorites">
            <Title title='즐겨찾기 목록'/>
            <hr className="hr"/>
            <Form className="fav-th d-flex">
                <Form.Label column lg={1}>지역</Form.Label>
                <Form.Label column lg={6}>시설명</Form.Label>
                <Form.Label column lg={2}>연락처</Form.Label>
            </Form>

            <FavoritesList region='성남시' gym={title} contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='의정부시' gym={title} contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='화성시' gym={title} contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>
            <FavoritesList region='안산시' gym={title} contact='123-4567-8910' textClick={()=>{ setLgShow(true)}}/>

            <Paging cnt={10}/>

            <PlaceModal lgShow={lgShow} setLgShow={setLgShow} score={3}
                        addr={addr} title={title} des={des} img={img} />
        </Container>
        </>
    )
}

export default Favorites