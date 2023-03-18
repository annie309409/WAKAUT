import { useEffect, useState } from "react";
import Alerts from '../../components/alert';
import Search from '../../components/search';
import {Container} from 'react-bootstrap';
import List from '../../components/list';
import WriteModal from './write_modal';
import getLayout from '../../components/layouts/getLayout';
import {Datas} from '../feutils';

// function handleScroll(){
//     // 스크롤 페이징처리 전처리
//     const scrollTop = window.scrollY;
//     console.log(scrollTop);
// }

export async function getServerSideProps(ctx){
    let boards = await Datas('/board/boardlist');
    return{props:{boards}};
}

const BoardList=({boards})=>{
    // useEffect(()=>{
    //     window.addEventListener('scroll', handleScroll, { capture: true });
    //     return ()=>{
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // })
    
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
        <Alerts color='success' msg='해당 게시판은 관리자에의해 실시간 관리되고있습니다. 허위사실유포 및 부적절한 표현은 차단될 수 있습니다.'/>
        <Search cat={['Content','Review']} title='All' btn={['검색하기','새글쓰기']} btncol={['secondary','success']} click={[false,()=>{setLgShow(true)}]}/>
        <Container className="lists">
            {
                boards.boards.map((m,idx)=>{
                    return <List key={idx} title={m.title} note={m.content} malcnt={m.cmtcnt} img={true} col='bg-warning' time={m.regdate2} kd={m.category} view={m.views} to={`/board/boardview?bid=${m.bid}`} name={m.name} />
                })
            }
        </Container>
        <WriteModal lgShow={lgShow} setLgShow={setLgShow}/>
        </>
    )
}

getLayout(BoardList,{title:'다같이 운동해요! WAKAUT!',description:'워크아웃 커뮤니티 게시판입니다.'})
export default BoardList;
