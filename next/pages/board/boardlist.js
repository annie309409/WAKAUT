import { useState } from "react";
import Alerts from '../../components/alert';
import Search from '../../components/search';
import {Container} from 'react-bootstrap';
import List from '../../components/list';
import Paging from '../../components/pagenation';
import WriteModal from './write_modal';
import getLayout from '../../components/layouts/getLayout';
import axios from 'axios';
import Datas from "../feutils";
console.log(await Datas());

const BoardList=()=>{
    const [lgShow, setLgShow] = useState(false);
    return(
        <>
        <Alerts color='success' msg='해당 게시판은 관리자에의해 실시간 관리되고있습니다. 허위사실유포 및 부적절한 표현은 차단될 수 있습니다.'/>
        <Search cat={['content','review']} btn={['검색하기','새글쓰기']} btncol={['secondary','success']} click={[false,()=>{setLgShow(true)}]}/>
        <Container>
            {/* {
                boards.boards.map(m=>{
                    return <List title={m.title} note={m.content} malcnt='3' img={true} col='bg-warning' time={m.regdate2} kd={m.category} view={m.views} to={`/board/boardview?bid=${m.bid}`} />
                })
            } */}
        </Container>
        <WriteModal lgShow={lgShow} setLgShow={setLgShow}/>
        <Paging cnt={10}/>
        </>
    )
}

export default BoardList;

getLayout(BoardList,{title:'다같이 운동해요! WAKAUT!',description:'워크아웃 커뮤니티 게시판입니다.'})
