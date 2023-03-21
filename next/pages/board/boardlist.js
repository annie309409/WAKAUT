import { useEffect, useState } from "react";
import Alerts from '../../components/alert';
import Search from '../../components/search';
import {Container} from 'react-bootstrap';
import List from '../../components/list';
import WriteModal from './write_modal';
import getLayout from '../../components/layouts/getLayout';
import {Datas} from '../feutils';
import { BarLoader } from "react-spinners"


//처음 데이터 세팅
export async function getServerSideProps(ctx){
    let boards = await Datas('/board/boardlist','pg=5');
    return{props:{boards}};   
}

const BoardList=({boards,session})=>{
    let [dtfn,setDtfn] = useState(boards.boards);
    let [cnt,setCnt] = useState(2);
    const [lgShow, setLgShow] = useState(false);
    const [selVal, setSelval] = useState('All');
    const [srhVal, setSrhVal] = useState('');
    const [srch,setSrch] = useState(false);

    //스크롤 페이징 처리
    async function handleScroll(){
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight) {
            setCnt(cnt+1);
            let dt = await dts(cnt*5);
            setDtfn(dt);
        }
    }

    // 스크롤 페이징 데이터 불러오기
    async function dts(i){
        let res = await Datas('/board/boardlist',`pg=${i}&cat=${selVal}&note=${srhVal}`).then(res=>res);
        return await res.boards;
    }

    //검색 시 액션
    async function sc(){
        setSrch(true);
        dts(5);
    }
    //스크롤 이벤트 등록
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll, { capture: true });
        return ()=>{
            window.removeEventListener("scroll",handleScroll,{ capture: true });
        }
    })

    return(
        <>
        <Alerts color='success' msg='해당 게시판은 관리자에의해 실시간 관리되고있습니다. 허위사실유포 및 부적절한 표현은 차단될 수 있습니다.'/>
        <Search cat={['commnunity','review']} title='All' btn={['검색하기','새글쓰기']} btncol={['secondary','success']} click={[sc,()=>{setLgShow(true)}]} setSelval={setSelval} setSrhVal={setSrhVal} srhVal={srhVal}/>
        <Container className="lists">
            {
                dtfn.map((m,idx)=>{
                    return <List key={idx} title={m.title} note={m.content} malcnt={m.cmtcnt} img={true} col='bg-warning' time={m.regdate2} kd={m.category} view={m.views} to={`/board/boardview?bid=${m.bid}`} name={m.name} />
                })
            }
            <div className="pg">
                <BarLoader color="#ccc" cssOverride={{position: "absolute", margin:"auto", top:0,left:0, right:0, bottom:0,zIndex:555}} />
            </div>
        </Container>
        <WriteModal lgShow={lgShow} setLgShow={setLgShow} sename={session.name} seid={session.userid}/>
        </>
    )
}

getLayout(BoardList,{title:'다같이 운동해요! WAKAUT!',description:'워크아웃 커뮤니티 게시판입니다.'})
export default BoardList;
