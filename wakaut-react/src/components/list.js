const List = (props)=>{
    return(
        <div className="shadow mt-4">
            <div className="article d-flex p-3">
                {(props.img)? (<div className="image"></div>):false}
                <div className="texts ms-2 col-8">
                    <h2>{props.title}</h2>
                    <p className="ell mb-0">{props.note}</p>
                </div>
                <div className="mal bg-warning ms-auto">{props.malcnt}</div>
            </div>
        </div>
    )
}

export default List;