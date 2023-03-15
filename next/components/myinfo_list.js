const Myinfo_list = (props) => {
    return(
        <div className='myinfo-list-wrap d-flex'>
            <div className='myinfo-list col-3'>{props.type}</div>
            <div className='col-9'>{props.detail}</div>
        </div>
    )
}

export default Myinfo_list;