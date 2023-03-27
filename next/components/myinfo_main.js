import {Button} from "react-bootstrap";
import Link from "next/link";
import {signOut} from "next-auth/client";

const MyInfoMain = (props) => {
    return(
        <>
            {(props.noimage) ?
                <div className='myinfo-main-wrap d-flex'>
                    <div className='myinfo-title col-6'>{props.label}</div>
                    <div className='myinfo-btn-container col-6'>
                        <Link href={props.link}><Button className="myinfo-btn" type='button'>{props.btnvalue}</Button></Link>
                    </div>
                </div>
                :
                <div className='myinfo-main-wrap d-flex'>
                    <div className='profile-container col-3'>
                        <div className="profile-img">&nbsp;</div>
                    </div>
                    <div className='profile-name col-6'>{props.label}</div>
                    <div className='logout-container col-3'>
                        <Link href={props.link}><Button className="myinfo-btn" type='button' onClick={()=>{signOut().then(r=>location.href='/')}}>{props.btnvalue}</Button></Link>
                    </div>
                </div>
            }
        </>
    )
}
export default MyInfoMain