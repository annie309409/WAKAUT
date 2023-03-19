import { Container,Form,Button } from "react-bootstrap";
import List from "../../components/list";
import Link from "next/link";
import {useState} from 'react';
import WriteModal from "./write_modal";
import Mgmodal from "../../components/mgmodal";
import getLayout from '../../components/layouts/getLayout';
import {Datas,Post,handleInput} from '../feutils';
let title='';
let contents ='';


//데이터 끌고오기!
export async function getServerSideProps(ctx){
    let boards = await Datas(`/board/boardview?bid=${ctx.query.bid}`);
    return{props:{boards}};
}

//데이터 등록하기
export async function write(e,{bid,userid,comment}){
    e.preventDefault();
    Post({bid:bid,userid:userid,comment:comment},'/board/repwrite');
    location.href=`http://localhost:3000/board/boardview?bid=${bid}`;
}

export async function del(e,{bid}){
    e.preventDefault();
    Post({bid:bid},'/board/repwrite')
}

const Boardview=({boards})=>{
    const [lgShow, setLgShow] = useState(false);
    const [mgShow, setMgShow] = useState(false);
    const [reply, setReply] = useState();
    let bd = boards[0];

    return (
        <>
            <div className="brdview">
                <header className="bg-secondary pt-5 pb-4 brdview">
                </header>
                <Container>
                    <List title={bd.title} kd={bd.category} time={bd.regdate2} view={bd.views+1} name={bd.name}/>
                </Container>
            </div>
            
            <Container>
                <p className="viewnote">{bd.content}</p>
                <div className="replay p-5">
                    {
                        bd.com.map((m,idx)=>{
                            return(
                                <>
                                 <div className="txtLft d-flex" key={idx}>
                                    <h5>{m.name}</h5>
                                    <p className="ms-5">{m.comment} <small>{m.regdate2}</small></p>
                                    <p className="ms-3">삭제하기</p>
                                 </div>
                                </>
                           )
                        })
                    }
                <Form>
                    <div className="reTxt d-flex align-items-end mt-4"> 
                        <Form.Control as="textarea" placeholder="댓글은 한번 달면 삭제가 불가능하답니당 👮‍♂️👮‍♀️ " style={{ height: '80px' ,width:'90%' }} onChange={(e)=>{handleInput(setReply,e)}} />
                        <button className="btn btn-success ms-3" type="submit" onClick={(e)=>{ write(e,{bid:bd.bid,userid:2,comment:reply})}}>댓글 등록</button>
                    </div>
                </Form>
                </div>
                <div className="btns mt-4 mb-4 d-flex  justify-content-end">
                    
                    <Button className="ms-2" variant="primary"><Link href="/board/boardlist">목록으로</Link></Button>
                    <Button className="ms-2" variant="success" onClick={()=>{setLgShow(true)}}>수정하기</Button>
                    <Button className="ms-2" variant="secondary" onClick={()=>{setMgShow(true)}}>삭제하기</Button>
                    <Button className="ms-2" variant="danger" onClick={()=>{setMgShow(true)}}>강제삭제</Button>
                </div>
                <Mgmodal LgShow={mgShow} setLgShow={setMgShow} title="게시글 삭제" msg="정말 삭제하시겠습니까?"/>
               <WriteModal title={boards[0].title} note={boards[0].content} bid={boards[0].bid} setLgShow={setLgShow} lgShow={lgShow}/>
            </Container>
        </>
    )
}

    getLayout(Boardview,{title:title,description:contents});

export default Boardview;
