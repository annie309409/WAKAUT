
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useState} from "react";
import Mgmodal from "./mgmodal";

const Managerlist = (props)=>{
    return(
        <div className="shadow mt-8">
            <div className="article d-flex p-3" style={{margin:"20px"}}>
                <div className="left d-flex col-12" >
                    {(props.img)? (<div className="image" style={{padding: '50px',margin:'5px',borderRadius:'20px',width:'200px' }}>프로필사진</div>):(<div className="image">프로필 사진이 없습니다.</div>)}
                    <div className="texts ms-2 col-8" style={{display:"flex"}}>
                        <div style={{display:'inline', marginLeft:"15px"}}>
                            <ul style={{listStyle:'none'}}>
                                <li style={{color:"gray"}}><p>회원 정보</p></li>
                                <li>이름 {props.name}</li>
                                <li>성별 {props.gender}</li>
                                <li>생년월일 {props.birth}</li>
                                <li>연락처 {props.phone}</li>
                                <li>이메일 {props.email}</li>
                            </ul>
                        </div>

                        <div style={{display:'inline', marginLeft:"45px"}}>
                            <ul style={{listStyle:'none'}}>
                                <li style={{color:"gray"}}><p>게시판</p></li>
                                <li>게시글수 {props.boardnum}개</li>
                                <li>댓글 수 {props.comments}개</li>
                            </ul>
                        </div>

                    </div>

                    <div style={{display:'flex',justifyContent:"end",alignContent:"center",alignItems:"end"  }} >
                        <Button type='button' onClick={()=>{props.setLgShow(true)}} style={{background:'#239aaf', border:'none', color:'white', fontSize: '20px'}}>회원 사용 정지</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Managerlist;