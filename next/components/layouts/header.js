import {Form,Navbar,Container,Button,Nav} from 'react-bootstrap';
import Link from "next/link";
import {signOut} from "next-auth/client";
import {useEffect, useState} from "react";
import {Datas} from "../feutils";

const Header = (props)=>{
    const [word, setWord] = useState('');
    const [lists, setLists] = useState([]);
    const [listsfn, setListsFn] = useState([]);
    const handleInput = (e) => {
        setWord(e.target.value);
        if(e.target.value != '')findInd(e.target.value);
    };
    const handleSearch = () => {
        location.href=`http://localhost:3000/?word=${word}`;
    };

    const indexing = async()=>{
        setLists(await Datas('/main','lists=y'))
    }
    useEffect(()=>{
        indexing();
    })

    const findInd =  async(ind)=>{
        setListsFn(lists.filter(f=>f.indexOf(ind)!==-1));
    }

    // 소셜로그인 유저 마이페이지 접근 금지
    function divisionUser() {
        const userid = props.sess.userid;
        const isSocialUser = /^\d{10}$/;
        return isSocialUser.test(userid);
    }

    const handleAccess = () => {
        alert("소셜로그인 유저는 이용하지 못하는 서비스입니다.");
    };
    return(
        <header>
            <Navbar bg="light" expand="lg">
                <Container>

                    <div className="logo"><Link href="/" className='navbar-brand'>WAKAUT</Link></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            props.menu.map((e,i)=>{
                                if(e==='logout') return <div className='ms-2 menus' key={i} onClick={()=>{signOut().then(r=>location.href='/')}}>{e}</div>
                                else if(e==='mypage'&&divisionUser()) return <div className='ms-2 menus' onClick={handleAccess} key={i}>{e}</div>
                                else return <div className='ms-2 menus' key={i}><Link href={props.route[i]}>{e}</Link></div>
                            })
                        }
                    </Nav>
                    <Form className="d-flex col-5 srchHdr">
                    <Form.Control onChange={handleInput} placeholder={`${props.sess.name}님, 운동하는곳을 검색해보세요!`} aria-label="findlocation" aria-describedby="basic-addon1" value={word}/>
                        <ul>
                            {
                                listsfn.map((m,idx)=>{
                                    return <li key={idx} onClick={(e)=>{ setWord(e.target.innerText), setListsFn([])}}>{m}</li>
                                })
                            }
                        </ul>
                        <Button onClick={handleSearch} className='ms-2 col-5' variant="outline-success">Search Place</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;