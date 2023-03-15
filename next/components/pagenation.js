import {Pagination} from 'react-bootstrap';
const Paging=(props)=>{
    let pg = [];
    for(let i=0 ; i<props.cnt;i++){
        pg.push(i+1);
    }
    return(
        <Pagination className='d-flex justify-content-center mt-4'>
        <Pagination.First />
        <Pagination.Prev />
            {pg.map(m=>{
                return <Pagination.Item key={m}>{m}</Pagination.Item>
            })}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>

        
    )
}

export default Paging;