import React from "react"
import { HashLoader } from "react-spinners"
export default function Loading(props){
    return(
        <>  
            <HashLoader size='80px' color="#A9DEFF" loading={props.loading} cssOverride={{position: "absolute", margin:"auto", top:0,left:0, right:0, bottom:0,zIndex:555}}/>
        </>
    )
}