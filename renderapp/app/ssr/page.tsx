//This page demonstrates the dynamic rendering on the server side
 
import { cache } from "react"
 
//Page is generated for every request on the server using dynamioc function like params/ next/ headers/ nocache...
 
 
export default async function ssr(){
    //cache:'no-store' // force the server for fetching a fresh data for every single request
    const response =await fetch("https://jsonplaceholder.typicode.com/users", {
        cache:'no-store',
    });
 
    //get the data
    const data = await response.json();
 
    //get the request time
    const reqTime = new Date().toLocaleTimeString();
 
    return(
        <div>
            <h3> SSR - Dynamic </h3>
            <p> Requested user is : {data.name}</p>
            <p> Rendered on the server : {reqTime}</p>
        </div>
    )
}