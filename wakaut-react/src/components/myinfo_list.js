const Myinfo_list = (props) => {
    return(
        <div className='d-flex' style={{alignItems:'center', margin:'20px 0', fontSize:'32px'}}>
            <div className='col-3' style={{color:'#a1a1a1', }}>{props.type}</div>
            <div className='col-9'>{props.detail}</div>
        </div>
    )
}

export default Myinfo_list;