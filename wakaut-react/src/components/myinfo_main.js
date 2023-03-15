import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const MyInfoMain = (props) => {
    return(
        <>
        {(props.noimage) ?
            <div className='myinfo-main-wrap d-flex'>
                <div className='myinfo-title col-6'>회원정보</div>
                <div className='myinfo-btn-container col-6'>
                    <Link to='/modify'><Button className="myinfo-btn" type='button'>회원정보 수정</Button></Link>
                </div>
            </div>
        :
            <div className='myinfo-main-wrap d-flex'>
                <div className='profile-container col-3'>
                    <div className="profile-img">&nbsp;</div>
                </div>
                <div className='profile-name col-6'>홍길동</div>
                <div className='logout-container col-3'>
                    <Link to='/'><Button className="myinfo-btn" type='button'>로그아웃</Button></Link>
                </div>
            </div>
        }
        </>
    )
}
export default MyInfoMain