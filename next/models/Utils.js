// index.js에서 사용되는 함수들
// 전체시설보기 눌렀을때 재렌더링
const handleShowAll = () => {
    location.href="/"
};

// 시설구분명 선택 시 state 업데이트
const handleFacilityChange = (e, setSelectedFacility) => {
    setSelectedFacility(e.target.value);
}

// 시군명 선택 시 시설구분명 셀렉트 태그 업데이트 및 지도 중심좌표 설정
const handleSigunChange = (e, setSelectedSigun, setSelectedFacility, setSearchText,
                           items, setState, setSearchResults, setSearchCount) => {
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

// 검색어 입력 시 state 업데이트
const handleSearchTextChange = (e, setSearchText, setSearchResults, setSearchCount, setIsButtonActive) => {
    setSearchText(e.target.value);
    // 검색 결과 초기화
    setSearchResults([]);
    setSearchCount(0);
    setIsButtonActive(Boolean(e.target.value));
}

const handleSearchButtonClick = (items, selectedSigun, selectedFacility,
                                 searchText, setShow, setSearchResults,
                                 setSearchCount) => {
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

    // 검색결과가 없다면 안내메시지를 출력하는 모달을 띄운다
    if (results.length === 0) setShow(true)
    else{
        setSearchResults(results);
        setSearchCount(results.length);
    }
}



module.exports = {handleShowAll, handleFacilityChange,
    handleSigunChange, handleSearchTextChange, handleSearchButtonClick};