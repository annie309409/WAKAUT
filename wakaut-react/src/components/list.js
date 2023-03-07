import { AiFillClockCircle,AiFillRead } from "react-icons/ai";
import {Badge} from 'react-bootstrap';

const List = (props)=>{
    return(
        <div className="shadow mt-4" onClick={props.onClick}>
            <div className="article d-flex p-3">
                {(props.img)? (<div className="image"></div>):false}
                <div className="texts ms-2 col-8">
                    <h2>{props.title}</h2>
                    <p className="ell mb-0">{props.note}</p>
                    {(props.time)? <p className="mt-2 mb-0"> <Badge bg="success">{props.kd}</Badge> <AiFillClockCircle /> {props.time} <AiFillRead /> 255 </p> : false}
                </div>
                {(props.malcnt)?<div className={`mal ${props.col} ms-auto`}>{props.malcnt}</div> : false}
            </div>
        </div>
    )
}

export default List;