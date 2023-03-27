import Link from "next/link";
import React from "react";
import {BsPencilSquare} from "react-icons/bs";

const MyPgWrite = (props) => {
    return (
        <div className='write d-flex'>
            <div className='write-ic col-5'><Link href="/board/boardlist"><BsPencilSquare className="sq-pen"/></Link></div>
            <div className="write-history col-2">남긴 글</div>
            <div className='history-amount col-5'>{props.history}</div>
        </div>
    );
}

export default MyPgWrite;