//This page demonstrates the rendering on a periodic basis
 
export default async function isr(){
    //A static page that will update for every 10 sec
    const response = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC", {
        next:{revalidate:10},
    });
 
    //captiure the data
    const data = await response.json();
    return(
        <div>
            <h3> ISR - Rendering </h3>
            <p> Current UTC TIme (for every 10 sec..) </p>
            <p>{data.datetime}</p>
            
        </div>
    )
}