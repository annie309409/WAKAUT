import {Button, Container, Form, FormSelect} from "react-bootstrap";
import List from "../components/list";
import { useEffect, useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import PlaceModal from "./place_modal";
import img from '../assets/workaut.png';
import mapicon from '../assets/map-icon.png';
import getLayout from "../components/layouts/getLayout";

import Modal from "../components/modal";
import {Datas} from "../pages/feutils";

import dynamic from 'next/dynamic';


const Map = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.Map), {
    ssr: false
});
const MapMarker = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.MapMarker), {
    ssr: false
});

export async function getServerSideProps(ctx) {
    let items = await Datas('/main?srch=');
    return {props: {items: items}}
}

export default function Index({items}) {
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);

    let des = '#에어로빅 #줌바 #조깅';

    const [selectedSigun, setSelectedSigun] = useState("");
    const [selectedFacility, setSelectedFacility] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(items);  // 검색결과 저장 state
    const [selectedPlace, setSelectedPlace] = useState(null);   // 마커 클릭시 모달 state
    const [searchCount, setSearchCount] = useState(items.length);  // 총 몇개의 시설이 조회된건지 저장하는 state


    // 시군명 선택 시 시설구분명 셀렉트 태그에 표시할 options 배열 반환
    function getFacilityOptions(sigun) {
        const facilities = items.filter((item) => item.SIGUN_NM === sigun);
        const facilityNames = [...new Set(facilities.map((item) => item.FACLT_DIV_NM))];
        return facilityNames.map((name) => <option key={name}>{name}</option>);
    }

    // 시군명 선택 시 시설구분명 셀렉트 태그 업데이트 및 지도 중심좌표 설정
    function handleSigunChange(e) {
        setSelectedSigun(e.target.value);
        setSelectedFacility("");
        setSearchText("");

        // 시설 데이터 중 첫번째 시설의 위도와 경도 정보 가져오기
        const firstFacility = items.find((item) => item.SIGUN_NM === e.target.value);
        if (firstFacility) {
            const lat = parseFloat(firstFacility.REFINE_WGS84_LAT);
            const lng = parseFloat(firstFacility.REFINE_WGS84_LOGT);
            // 위도와 경도 정보로 중심 좌표 설정
            setState((prev) => ({
                ...prev,
                center: { lat, lng },
            }));
        }
        // 검색 결과 초기화
        setSearchResults([]);
        setSearchCount(0);
    }

    // 시설구분명 선택 시 state 업데이트
    function handleFacilityChange(e) {
        setSelectedFacility(e.target.value);
    }

    // 검색어 입력 시 state 업데이트
    function handleSearchTextChange(e) {
        setSearchText(e.target.value);
        // 검색 결과 초기화
        setSearchResults([]);
        setSearchCount(0);
    }

    function handleSearchButtonClick() {
        // items 객체 복사
        let results = [...items];

        // 선택된 시군명이 있다면, 해당 시군명에 해당하는 시설들만 필터링
        if (selectedSigun) {
            results = results.filter((item) => item.SIGUN_NM === selectedSigun);
        }

        // 선택된 시설구분명이 있다면, 해당 시설구분명에 해당하는 시설들만 필터링
        if (selectedFacility) {
            results = results.filter((item) => item.FACLT_DIV_NM === selectedFacility);
        }
        // 검색어가 있다면, 시설명이 해당 검색어를 포함하는 시설들만 필터링
        if (searchText) {
            results = results.filter((item) => item.FACLT_NM.includes(searchText));
        }
        if (results.length === 0) setShow(true)
        else{
        setSearchResults(results);
        setSearchCount(results.length);
        }
    }


    const [state, setState] = useState({
        center: {
            lat: 37.28892227326957,
            lng: 127.05363481102465,
        },
        errMsg: null,
        isLoading: true,
    })

    useEffect(() => {
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setState((prev) => ({
                        ...prev,
                        center: {
                            lat: position.coords.latitude, // 위도
                            lng: position.coords.longitude, // 경도
                        },
                        isLoading: false,
                    }))
                },
                (err) => {
                    setState((prev) => ({
                        ...prev,
                        errMsg: err.message,
                        isLoading: false,
                    }))
                }
            )
        } else {
            // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
            setState((prev) => ({
                ...prev,
                errMsg: "geolocation을 사용할수 없어요..",
                isLoading: false,
            }))
        }
    }, [])


    return(
        <Container className="d-flex mt-4 mb-4 index">
            <div className="left col-6 ">
                <p>총 {searchCount}건</p>
                {searchResults.map((item) => (
                    <List
                        key={item.FACLT_NM}
                        title={item.FACLT_NM}
                        malcnt={<AiTwotoneHeart />}
                        note={item.REFINE_ROADNM_ADDR}
                        col="bg-secondary"
                        textClick={() => {
                            setSelectedPlace(item);
                            setLgShow(true);
                            const lat = parseFloat(item.REFINE_WGS84_LAT);
                            const lng = parseFloat(item.REFINE_WGS84_LOGT);
                            setState((prev) => ({
                                ...prev,
                                center: { lat, lng },
                            }));
                        }}
                    />
                ))}
            </div>

            <div className="right col-6 ms-4">
                <Form className="d-flex mb-2">
                    <FormSelect value={selectedSigun} onChange={handleSigunChange}>
                        <option value="">시군</option>
                        {/* API에서 불러오는 데이터중 시군 데이터로 새로운 배열을 생성하되 중복을 제거함 */}
                        {[...new Set(items.map((item) => item.SIGUN_NM))].map((sigun) => (
                            <option key={sigun} value={sigun}>{sigun}</option>
                        ))}
                    </FormSelect>
                    {selectedSigun ? (
                        <FormSelect value={selectedFacility} onChange={handleFacilityChange}>
                            <option value="">시설구분명</option>
                            {getFacilityOptions(selectedSigun)}
                        </FormSelect>
                    ) : (
                        <FormSelect >
                            <option>시설구분명</option>
                        </FormSelect>
                    )}
                    <Form.Control
                        type="text"
                        placeholder="어디서 운동할까요?"
                        value={searchText}
                        onChange={handleSearchTextChange}
                    />
                    <Button onClick={handleSearchButtonClick}>Search</Button>
                </Form>

            <Map center={state.center} style={{ width: "100%", height: "800px" }}  level={3}>
                {(!state.isLoading ? searchResults : []).map((item) => (
                    <MapMarker
                        key={item.FACLT_NM}
                        position={{ lat: item.REFINE_WGS84_LAT, lng: item.REFINE_WGS84_LOGT }}
                        onClick={() => {
                            setSelectedPlace(item);
                            setLgShow(true);
                        }}
                        image={{
                            src: `${mapicon}`,
                            size: {width: 30, height: 30,},
                            options: {
                             offset: {x: 27, y: 69,},
                        },
                        }}
                    />
                ))}
            </Map>
            </div>
            <PlaceModal
                size="lg"
                lgShow={lgShow}
                setLgShow={setLgShow}
                score={3}
                title={selectedPlace ? selectedPlace.FACLT_NM : ""}
                addr={selectedPlace ? selectedPlace.REFINE_ROADNM_ADDR : ""}
                contact={selectedPlace ? selectedPlace.CONTCT_NO : ""}
                des={des}
                img={img}
                lat={selectedPlace ? selectedPlace.REFINE_WGS84_LAT : null}
                lng={selectedPlace ? selectedPlace.REFINE_WGS84_LOGT : null}
            />
            <Modal class="searchModal" size="sm" lgShow={show} setLgShow={setShow} children="해당하는 시설이 없습니다."/>
        </Container>
    )
}

getLayout(Index,{title:'주변에서 운동해요! WAKAUT!',description:'신개념 운동 플랫폼 워크아웃!'})
