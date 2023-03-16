import { Container } from "react-bootstrap";
import List from "../components/list";
import { useEffect, useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import PlaceModal from "./place_modal";
import img from '../assets/workaut.png';
import mapicon from '../assets/map-icon.png';
import getLayout from "../components/layouts/getLayout";
import dynamic from 'next/dynamic';
import KakaoSet from "../services/kakaoSet";
const Map = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.Map), {
    ssr: false
});
const MapMarker = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.MapMarker), {
    ssr: false
});
export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    let addr = '경기도 부천시 소사로';
    let title = '부천 종합 운동장';
    let des = '#에어로빅 #줌바 #조깅';

    return(
        <Container className="d-flex mt-4 mb-4 index">
            <div className="left col-6 ">
                <KakaoSet />
                <List title={addr} malcnt={<AiTwotoneHeart />} note={title} col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
                <List title={addr} malcnt={<AiTwotoneHeart />} note={title} col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
                <List title={addr} malcnt={<AiTwotoneHeart />} note={title} col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
                <List title={addr} malcnt={<AiTwotoneHeart />} note={title} col='bg-danger' textClick={()=>{ setLgShow(true)}}></List>
            </div>
            <div className="right col-6 ms-4">
            <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "800px" }}  level={5 }>
                <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}  image={{
                        src: `${mapicon}`, // 마커이미지의 주소입니다
                        size: {
                            width: 64,
                            height: 69,
                        }, // 마커이미지의 크기입니다
                        options: {
                            offset: {
                            x: 27,
                            y: 69,
                            }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                        },}} 
                        onMouseOver={() => setIsOpen(true)}
                        onMouseOut={() => setIsOpen(false)}
                        >
                     {isOpen && <div style={{ padding: "5px", color: "#000" }}>부천 종합운동장</div>}
                </MapMarker>
                </Map>
            </div>
            <PlaceModal lgShow={lgShow} setLgShow={setLgShow} score={3} addr={addr} title={title} des={des} img={img} />  
        </Container>
    )
}

getLayout(Index,{title:'주변에서 운동해요! WAKAUT!',description:'신개념 운동 플랫폼 워크아웃!'})
