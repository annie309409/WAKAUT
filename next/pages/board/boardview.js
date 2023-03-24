import { Container,Form,Button } from "react-bootstrap";
import List from "../../components/list";
import Link from "next/link";
import {useState} from 'react';
import WriteModal from "./write_modal";
import Mgmodal from "../../components/mgmodal";
import getLayout from '../../components/layouts/getLayout';
import {Datas,Post,handleInput} from '../../components/feutils';
let title='';
let contents ='';


//데이터 끌고오기!
export async function getServerSideProps(ctx){
    let boards = await Datas(`/board/boardview?bid=${ctx.query.bid}`);
    let atlists = await Datas(`/main?lists=y`);
    return{props:{boards,atlists}};   
}
const Boardview=({boards,session,atlists})=>{
    const [lgShow, setLgShow] = useState(false);
    const [mgShow, setMgShow] = useState(false);
    const [reply, setReply] = useState();
    const [cmts,setCmts] = useState(boards[0].com);
    const [cnfirm, setCnfirm] = useState(false);
    const [uid, setUid] = useState(session.userid);
    let bd = boards[0];
    //데이터 등록하기
    async function write(e,{bid,userid,comment}){
        e.preventDefault();
        if(reply!=''){
            let dt = Post({bid:bid,userid:userid,comment:comment},'/board/repwrite').then(r=>r);
            if((await dt).cnt > 0) dts();
            setReply('');
        }else{
            alert('아무것도 입력하지 않았어요😥')
        }
    }
    //등록 후 끌고오기
    async function dts(){
        let res = await Datas(`/board/boardview`,`bid=${bd.bid}`);
        setCmts (res[0].com); 
    }
    //리플 삭제하기
    function del(cid){
        Post({cid:cid},'/board/repwrite');
        dts();
    }

    //소셜사용자용 
    async function selId (uid){
        let res = await Datas('/board/boardlist',`userid=${uid}`).then(res=>res);
        return await res;
    }
    
    if(uid>1000000000){
        let test = selId(uid);
        async function tt(){
            setUid((await test)[0].uid);
        }
        tt();
    }

    //게시글 삭제하기
    if(cnfirm){
        async function delBD(){
            let dt = Post({bid:bd.bid},'/board/delete').then(r=>r);
            if((await dt).cnt > 0 ){
                location.href ='http://localhost:3000/board/boardlist';
            }
        }
        delBD();
    };

    return (
        <>
            <div className="brdview">
                <header className="bg-secondary pt-5 pb-4 brdview">
                </header>
                <Container>
                    <List title={bd.title} kd={bd.category} time={bd.regdate2} view={bd.views+1} name={bd.name} cat={bd.facility_name}/>
                </Container>
            </div>
            <Container>
                <p className="viewnote">{bd.content}</p>
                <div className="replay p-5">
                    {
                        cmts.map((m,idx)=>{
                            return(
                                <>
                                 <div className="txtLft d-flex" key={idx}>
                                    <h5 key={m+idx+idx}>{m.name}</h5>
                                    <p className="ms-5" key={m+idx}>{m.comment} <small>{m.regdate2}</small></p>
                                    {(session.name === m.name)? <p className="ms-3 delRep" onClick={()=>{del(m.cid)}} key={m+m+idx}>X</p>:''}
                                    {(session.name === 'admin')? <p className="ms-3 delRep" onClick={()=>{del(m.cid)}} key={m+m+idx}>X</p>:''}
                                 </div>
                                </>
                           )
                        })
                    }
                <Form>
                    <div className="reTxt d-flex align-items-end mt-4"> 
                        <Form.Control as="textarea" placeholder="댓글은 한번 달면 삭제가 불가능하답니당 👮‍♂️👮‍♀️ " style={{ height: '80px' ,width:'90%' }} value={reply} onChange={(e)=>{handleInput(setReply,e)}} />
                        <button className="btn btn-success ms-3" type="submit" onClick={(e)=>{ write(e,{bid:bd.bid,userid:uid,comment:reply})}}>댓글 등록</button>
                    </div>
                </Form>
                </div>
                <div className="btns mt-4 mb-4 d-flex  justify-content-end">
                    
                    <Button className="ms-2" variant="primary"><Link href="/board/boardlist">목록으로</Link></Button>
                    {(session.name===bd.name)?<Button className="ms-2" variant="success" onClick={()=>{setLgShow(true)}} >수정하기</Button>:''}
                    {(session.name===bd.name)?<Button className="ms-2" variant="secondary" onClick={()=>{setMgShow(true)}} >삭제하기</Button>:''}
                    {(session.name==='admin')?<Button className="ms-2" variant="danger" onClick={()=>{setMgShow(true)}} >강제삭제</Button> : ''}
                </div>
                <Mgmodal LgShow={mgShow} setLgShow={setMgShow} setCnfirm={setCnfirm} title="게시글 삭제" msg="정말 삭제하시겠습니까?"/>
               <WriteModal title={boards[0].title} note={boards[0].content} bid={boards[0].bid} setLgShow={setLgShow} lgShow={lgShow} sename={session.name} seid={session.userid}  atlists={atlists}/>
            </Container>
        </>
    )
}

getLayout(Boardview,{title:title,description:contents});

export default Boardview;
