import Link from "next/link";
import React from "react";
import {BsPencilSquare} from "react-icons/bs";

const MyPgWrite = () => {
    return (
        <div className='write d-flex'>
            <div className='write-ic col-5'><Link href="/board/boardlist"><BsPencilSquare className="sq-pen"/></Link></div>
            <div className="write-history col-2"><Link href="/board/boardlist">남긴 글</Link></div>
            <div className='history-amount col-5'>(12)</div>
        </div>
    );
}

export default MyPgWrite;