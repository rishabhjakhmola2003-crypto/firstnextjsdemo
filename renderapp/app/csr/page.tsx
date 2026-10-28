//This page demonstrates the frequent and user specific changes to the user .
 
//Changes done at teh client browser using JS
 
'use client';
 
import { useState, useEffect } from "react";
 
export default function Csr(){
    //state variables
    const [item, setItem] = useState('');
    const [isLoad, setLoad] = useState(true);
 
    //useEffect hook
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
        .then((res)=>res.json())
        .then((data)=> {
            setItem(data.value);
            setLoad(false);
        })
    },[]);
 
    return(
        <div>
            <h2> CSR Rendering</h2>
            {isLoad ? (
                    <p> Fetching item from the browser </p>) :  
                    (
                        <p style={{backgroundColor:"#545454",fontStyle:"Italic" , padding:"1rem"}}>
                            &quot;{item}&quot;
                        </p>
                    )
                }
        </div>
    )
}
