import getLayout from '../../components/layouts/getLayout';
import {Datas} from '../../components/feutils';
import { useEffect, useState } from 'react';
import { Container,Button } from 'react-bootstrap';

export default function checkSocial({session}){
    const [msg,setMsg] =  useState('님은 인증된 사용자입니다. 메인으로 이동합니다.');
    async function dt(){
        let res= await Datas('/member/checked',`userid=${session.userid}`).then(res=>res);
        if(res.length>0){
            location.href='/'
        }else{
            setMsg("님은 아직 가입되지 않았습니다.");
        }    
    }
    
    async function socialJoin(){
        await Datas('/member/checked',`userid=${session.userid}&name=${session.name}&email=${session.email}`).then(res=>res);
        location.href='/'
    }
    useEffect(()=>{
        dt();
    },[])
    return(
        <> 
            <Container>
                <h2>{session.userid}{msg}</h2>
                {
                    (msg==='님은 아직 가입되지 않았습니다.')?
                    <div>
                        <p>아래의 버튼을 눌러 간편하게 가입할 수 있습니다.<br />가입을 하면 글쓰기 댓글 등의 기능을 사용할 수 있지만, 사이트를 보는것엔 이상이 없습니다.</p>
                        <Button onClick={socialJoin}>가입하기</Button>
                    </div> :''
                }
            </Container>
        </>
    )
}
getLayout(checkSocial,{title:'WAKAUT! 회원가입 체크',description:'회원가입 체크 페이지'})