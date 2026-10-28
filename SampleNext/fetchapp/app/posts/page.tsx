//This page is for demonstrating the server component and how to fetch the data
 
import { reschedulePrefetchTask } from "next/dist/client/components/segment-cache/scheduler";
import LikeButton from "../components/LikeButton";
 
 
// Posts data
 
//1. Prepare posts interface with the structure
interface Posts{
    id:number;
    title:string;
    body:string;
}
 
//2. Write a GetPosts() function -- write it as an async function which can return a promise object
 
async function getPosts(): Promise<Posts[]>{
 
    //fetch the url to get the posts data
    const postsUrl = "https://jsonplaceholder.typicode.com/posts";
 
    //get the result
    const result = await fetch(postsUrl,{
        //to cache or revalidate the data
        next:{revalidate:60}
    });
 
    //check the result for true or false with the HTTP status code
    if(!result.ok)
        throw new Error("Error in fetching the Posts data ")
 
    return result.json();
}
 
//Posts page method
export default async function posts(){
    //call the fetch by the server  before HTML render
    const posts = await getPosts();
 
    return (
        <div>
            <h3> Posts Data using fetch API() call in the Server Component </h3>
            <div style={{display:"flex", flexDirection:"column" , marginTop:"1.5rem", gap:"1.5rem"}}>
                {posts.map((post)=>(
                    <article key={post.id} style={{border :"1px solid #ccc" , padding :"1rem" , borderRadius:"6px"}}>
                        <h4> {post.title} </h4>
                        <p> {post.body} </p>
                        <LikeButton postId={post.id}/>
                        {/* Like button for the posts is coming form the Client component  */}
                    </article>
                ))}
            </div>
        </div>
    )
}
 