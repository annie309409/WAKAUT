import { useState } from "react";
import '../styles/boot-added.css';
import {Button, Container, Form} from 'react-bootstrap';
import Paging from '../components/pagenation';
import WriteModal from './write_modal';
import Title from "../components/title";
import Managerlist from "../components/manager_list";
import Mgmodal from "../components/mgmodal";




const Manager=()=>{
    const [LgShow, setLgShow] = useState(false);
    return(
        <Container>
            <Title title='관리자 회원 정보 관리'/>
            <hr />
            <Form className="d-flex col-5 float-end">
                <Form.Control placeholder="정지시킬 회원을 검색해주세요!" aria-label="findlocation" aria-describedby="basic-addon1"/>
                <Button className='ms-2 col-2' variant="btn btn-dark" >ID 검색</Button>
            </Form>
            <br />
            <br />
            <br />
            <Container>
                <Managerlist title='회원 정보' name='홍길동' gender='남' birth='2023-03-10' phone='010-9999-0111'
                             email='zzyzzy@naver.com' boardnum='8' comments='4' setLgShow={setLgShow} img={true} />
                <Managerlist title='회원 정보' name='홍길동' gender='남' birth='2023-03-10' phone='010-9999-0111'
                             email='zzyzzy@naver.com' boardnum='8' comments='4' setLgShow={setLgShow}  img={true} />
                <Managerlist title='회원 정보' name='홍길동' gender='남' birth='2023-03-10' phone='010-9999-0111'
                             email='zzyzzy@naver.com' boardnum='8' comments='4' setLgShow={setLgShow}  img={true} />
                <Managerlist title='회원 정보' name='홍길동' gender='남' birth='2023-03-10' phone='010-9999-0111'
                             email='zzyzzy@naver.com' boardnum='8' comments='4'  setLgShow={setLgShow} img={true} />
                <Paging cnt={5}/>
            </Container>
            <Mgmodal LgShow={LgShow} setLgShow={setLgShow}/>
        </Container>
    )
}
export default Manager;
