import Alerts from './alert';
import Search from './search';
import '../styles/boot-added.css';
import {Container,Form, Button} from 'react-bootstrap';
import List from './list';
import Paging from './pagenation';
const BoardList=()=>{    
    return(
        <>
            <Alerts color='success' msg='해당 게시판은 관리자에의해 실시간 관리되고있습니다. 허위사실유포 및 부적절한 표현은 차단될 수 있습니다.'/>
            <Search cat={['content','review']} btn={['검색하기','새글쓰기']} btncol={['secondary','success']}/>
            <Container>
                <List title='게시판 제목' note='이것은 테스트입니다..' malcnt='3' img={true} col='bg-warning' time='2023-03-07' kd='community'/>
                <List title='일요일에 축구할사람' note='아아닛!!! 축구를 한다고옷?' malcnt='15' img={true} col='bg-warning'/>
                <List title='데스매치 현피앱' note='광고사절입니당' malcnt='8' img={true} col='bg-warning'/>
                <List title='데스매치 현피앱' note='광고사절입니당' malcnt='8' img={true} col='bg-warning'/>
                <Paging cnt={5}/>
            </Container>            
        </>
    )
}

export default BoardList;