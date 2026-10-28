//This component is used to fetch the data in the client perspective
 
"use client";
 
import { useState } from "react";
 
//interface for the LikeButton Props
interface LikeButtonProps{
    //every like button can be used for the postid
    postId: number;
}
 
export default function LikeButton({postId}:LikeButtonProps){
 
    //use the state props
    const [like,setLike] = useState(0);
    const [isLoad,setLoad] = useState(false);
 
    //handle an action
    const LikeAction= async()=>{
        setLoad(true);
        
        //simulate the fetch call from the client.
        await new Promise((resolve)=> setTimeout(resolve,500));
 
        setLike((prev)=>prev+1);
        setLoad(false);
    }
    return(
        <div style={{marginTop:"0.75rem"}}>
            <h3> Like Button - Client Component </h3>
            <button onClick={LikeAction} disabled={isLoad}
                style={{ cursor:"pointer", padding:"0.5rem 1 rem" , border:"none", borderRadius:"6px", backgroundColor:"#7c7c7c" , color:"#ccc"}}>
                 {isLoad ? "Updating.." : `Like Post (${like})`}   
            </button>
            <span style={{padding:"0.5rem" , color:"#ccc", backgroundColor:"#666", marginLeft:"10px", fontSize:"0.88rem" }}>Post ID : {postId}</span>
 
        </div>
    )
}
 