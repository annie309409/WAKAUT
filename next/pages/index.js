import {Button, Container, Form, FormSelect} from "react-bootstrap";
import List from "../components/list";
import { useEffect, useState } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import PlaceModal from "./place_modal";
import img from '../assets/workaut.png';
import mapicon from '../assets/map-icon.png';
import getLayout from "../components/layouts/getLayout";
import Modal from "../components/modal";
import {Datas} from "../components/feutils";
import {
    handleFacilityChange,
    handleSearchButtonClick,
    handleSearchTextChange,
    handleShowAll,
    handleSigunChange
} from "../models/Utils";

import dynamic from 'next/dynamic';
import {getSession} from "next-auth/client";


const Map = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.Map), {
    ssr: false
});
const MapMarker = dynamic(() => import("react-kakao-maps-sdk").then((module) => module.MapMarker), {
    ssr: false
});

export async function getServerSideProps(ctx) {
    // 세션 객체 가져오기
    const session = await getSession(ctx);

    // 로그인한 사용자의 아이디
    let sessionUserid = session?.user?.userid || null;

    const word = ctx.query.word || '';
    let items = await Datas('/main', `srch=${word}`);
    let fList = await Datas('/member/favorites', `userid=${sessionUserid}`);
    return {props: {items: items, word: word, sessionUserid, fList}}
}

export default function Index({items, word, sessionUserid, fList}) {
    let des = '#에어로빅 #줌바 #조깅';

    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedSigun, setSelectedSigun] = useState("");
    const [selectedFacility, setSelectedFacility] = useState("");
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState(items);  // 검색결과 저장 state
    const [selectedPlace, setSelectedPlace] = useState(null);   // 마커 클릭시 모달 state
    const [searchCount, setSearchCount] = useState(items.length);  // 총 몇개의 시설이 조회된건지 저장하는 state
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [bdList, setBDLists] = useState({});

    // 즐겨찾기 추가 추적 state
    const [favoriteAdded, setFavoriteAdded] = useState(false);
    // List 컴포넌트 상태관리 state
    const [listData, setListData] = useState([]);

    useEffect(() => {
        const updateListData = async () => {
            const fetchedFList = await Datas('/member/favorites', `userid=${sessionUserid}`);
            // 여기에서 새로운 데이터를 listData에 업데이트
            const updatedListData = searchResults.map((item) => {
                const isFavorited = fetchedFList.some((facility) => facility.facility === item.FACLT_NM);
                return { ...item, isFavorited };
            });
            setListData(updatedListData);
        };

        updateListData();
    }, [favoriteAdded, searchResults]);

    const onFavoriteAdd = () => {
        setFavoriteAdded(!favoriteAdded);
        // location.href="/"
    };

    // 시군명 선택 시 시설구분명 셀렉트 태그에 표시할 options 배열 반환
    function getFacilityOptions(sigun) {
        const facilities = items.filter((item) => item.SIGUN_NM === sigun);
        const facilityNames = [...new Set(facilities.map((item) => item.FACLT_DIV_NM))];
        return facilityNames.map((name) => <option key={name}>{name}</option>);
    }


    const [state, setState] = useState({
        center: {
            lat: 37.28892227326957,
            lng: 127.05363481102465,
        },
        errMsg: null,
        isLoading: true,
    })

    // useEffect는 최초 렌더링 이후에 실행
    // useEffect의 첫 번째 인자로 전달한 함수는 컴포넌트가 마운트된 이후에 한번 실행되며,
    // 두 번째 인자로 전달한 배열에 지정한 값이 변경되었을 때에도 실행
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

    // 게시글 목록 가지고 오기
    async function lists(fcname){
        let boards = await Datas('/board/boardlist',`pg=5&fcname=${fcname}`).then(r=>r);
        setBDLists(await boards);
    }


    return(
        <Container className="d-flex mt-4 mb-4 index">
            <div className="left col-6 ">
                <p>총 {searchCount}건</p>
                {listData.map((item,idx) => (
                    <List
                        key={idx}
                        title={item.FACLT_NM}
                        malcnt={<AiTwotoneHeart />}
                        note={item.REFINE_ROADNM_ADDR}
                        col={item.isFavorited ? "bg-danger" : "bg-secondary"}
                        textClick={() => {
                            setSelectedPlace(item);
                            const lat = parseFloat(item.REFINE_WGS84_LAT);
                            const lng = parseFloat(item.REFINE_WGS84_LOGT);
                            setState((prev) => ({
                                ...prev,
                                center: { lat, lng },
                            }));
                            lists(item.FACLT_NM).then().then(setLgShow(true))
                        }}
                    />
                ))}
            </div>

            <div className="right col-6 ms-4">
                {word ? <Button className="showAll-btn mb-2" variant="outline-success" onClick={handleShowAll}>전체 시설보기</Button> : false}
                <Form className="d-flex mb-2">
                    <FormSelect value={selectedSigun}
                                onChange={e => handleSigunChange(
                                    e,
                                    setSelectedSigun,
                                    setSelectedFacility,
                                    setSearchText,
                                    items,
                                    setState,
                                    setSearchResults,
                                    setSearchCount)
                                }>
                        <option value="">시군</option>
                        {/* API에서 불러오는 데이터중 시군 데이터로 새로운 배열을 생성하되 중복을 제거함 */}
                        {
                            [...new Set(items.map((item) => item.SIGUN_NM))].map((sigun) => (
                                <option key={sigun} value={sigun}>{sigun}</option>
                            ))
                        }
                    </FormSelect>
                    {selectedSigun
                        ?
                        <FormSelect value={selectedFacility} onChange={e => handleFacilityChange(e, setSelectedFacility)}>
                            <option value="">시설구분명</option>
                            {getFacilityOptions(selectedSigun)}
                        </FormSelect>
                        :
                        <FormSelect >
                            <option>시설구분명</option>
                        </FormSelect>
                    }
                    <Form.Control
                        type="text"
                        placeholder="어디서 운동할까요?"
                        value={searchText}
                        onChange={e => handleSearchTextChange(e, setSearchText, setSearchResults, setSearchCount, setIsButtonActive)}
                    />
                    <Button className="facility-btn" variant="outline-success"
                            active={isButtonActive}
                            onClick={() => handleSearchButtonClick(
                                items,
                                selectedSigun,
                                selectedFacility,
                                searchText,
                                setShow,
                                setSearchResults,
                                setSearchCount,
                            )}>Search</Button>
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
                bdList={bdList}
                userid={sessionUserid}
                onFavoriteAdd={onFavoriteAdd}
            />
            <Modal title="알림" class="searchModal" size="md" lgShow={show} setLgShow={setShow}  children="해당하는 시설이 없습니다."/>
        </Container>
    )
}

getLayout(Index,{title:'주변에서 운동해요! WAKAUT!',description:'신개념 운동 플랫폼 워크아웃!'})
