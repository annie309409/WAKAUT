import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyInfoMain = (props) => {
    return(
        <>
        {(props.noimage) ?
            <div className='d-flex' style={{alignItems:'center', marginTop: '40px'}}>
                <div className='col-6' style={{fontSize:'16px', color:'#606060', fontWeight:'bold'}}>회원정보</div>
                <div className='col-6' style={{display:'flex', justifyContent:'end'}}>
                    <Link to='/modify'><Button type='button' style={{background:'#239aaf', border:'none', color:'white', fontSize: '12px', width:'90px', padding:'5px 0'}}>회원정보 수정</Button></Link>
                </div>
            </div>
        :
            <div className='d-flex' style={{alignItems:'center'}}>
                <div className='col-3'>
                    <div style={{width:'110px', height:'110px', background:'#ccc', borderRadius:'15px',}}>&nbsp;</div>
                </div>
                <div className='col-6' style={{fontSize:'18px', fontWeight:'bold', justifyContent:'start', display:'flex'}}>홍길동</div>
                <div className='col-3' style={{textAlign:'end'}}>
                    <Link to='/'><Button type='button' style={{background:'#239aaf', border:'none', color:'white', fontSize: '12px', width:'90px', padding:'5px 0'}}>로그아웃</Button></Link>
                </div>
            </div>
        }
        </>
    )
}
export default MyInfoMain