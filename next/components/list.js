import { CiAlarmOn,CiRead } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import {Badge} from 'react-bootstrap';

const List = (props)=>{
    return(
        <div className="shadow mt-4">
            <div className="article d-flex p-3">
                <div className="left d-flex col-10" onClick={props.textClick}>
                    {(props.img)? (<div className="image"></div>):false}
                    <div className="texts ms-2 col-8">
                            <h2>{props.title}</h2>
                            <p className="ell mb-0">{props.note}</p>
                            {(props.time)? <p className="mt-2 mb-0"> <Badge bg={(props.kd=='review')?'warning':'success'}>{props.kd}</Badge> <BsPersonCircle /> {props.name} <CiAlarmOn /> {props.time} <CiRead /> {props.view} </p> : false}
                            {(props.to)?<a href={props.to}></a>:false}
                    </div>
                </div>
                {(props.malcnt)?<div className={`mal ${props.col} ms-auto`}>{props.malcnt}</div> : false}
            </div>
        </div>
    )
}

export default List;