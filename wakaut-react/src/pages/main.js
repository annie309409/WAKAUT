import { Container } from "react-bootstrap";
import List from "../components/list";
import {Map,MapMarker} from "react-kakao-maps-sdk";
import mapicon from "../assets/map-icon.png";
import { useState } from "react";
import ModalDetail from "./modal_detail";
import { AiTwotoneHeart } from "react-icons/ai";

const Main=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return(
        <Container className="d-flex mt-4 mb-4">
            <div className="left col-6">
                <List title='부천 종합 운동장' malcnt={<AiTwotoneHeart />} note="경기도 부천시 소사로482" col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
                <List title='부천 종합 운동장' malcnt={<AiTwotoneHeart />} note="경기도 부천시 소사로482" col='bg-danger' textClick={()=>{ setLgShow(true)}}></List>
                <List title='부천 종합 운동장' malcnt={<AiTwotoneHeart />} note="경기도 부천시 소사로482" col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
                <List title='부천 종합 운동장' malcnt={<AiTwotoneHeart />} note="경기도 부천시 소사로482" col='bg-secondary' textClick={()=>{ setLgShow(true)}}></List>
            </div>
            <div className="right col-6 ms-4">
                {/* 맵 api 영역 (kakao-react전용 설치필요) :: npm install react-kakao-maps-sdk*/}
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
            <ModalDetail lgShow={lgShow} setLgShow={setLgShow} score={3} />
            
        </Container>
    )
}
export default Main;