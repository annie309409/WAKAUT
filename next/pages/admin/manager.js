import { useState } from "react";
import {Button, Container, Form} from 'react-bootstrap';
import Paging from '../../components/pagenation';
import Title from "../../components/title";
import Managerlist from "../../components/manager_list";
import Mgmodal from "../../components/mgmodal";
import getLayout from '../../components/layouts/getLayout'
import {Datas} from "../../components/feutils";

export async function getServerSideProps(ctx) {
    let datas = await Datas('/users/users');
    return {props: {data: datas}}
}


const Manager=({data,session})=>{
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
                {
                    data.boards.map(m=>{
                       return  <Managerlist title='회원 정보' name={m.name} gender={m.gender} birth={m.birth_date2} phone={m.phone_number}
                                     email={m.email} boardnum='8' comments='4' setLgShow={setLgShow} img={true} />
                        
                    })
                }
            
                <Paging cnt={5}/>
            </Container>
            <Mgmodal LgShow={LgShow} setLgShow={setLgShow} title='계정 관리' msg='해당 계정을 정말 정지시킬꺼에요?'/>
        </Container>
    )
}
export default Manager;

getLayout(Manager,{title:'WAKAUT 관리자 페이지 입니다.',description:'관리자 페이지입니다. (관리자 외 출입금지)'})
