//This page is for demonstrating the server component and how to fetch the data
 
import { reschedulePrefetchTask } from "next/dist/client/components/segment-cache/scheduler";
import LikeButton from "../components/LikeButton";
 
 
// Posts data
 
//1. Prepare posts interface with the structure
interface Users{
    id:number;
    name:string;
    email:string;
    address:Address;
    
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  
}
 
//2. Write a GetPosts() function -- write it as an async function which can return a promise object
 
async function getUsers(): Promise<Users[]>{
 
    //fetch the url to get the posts data
    const UsersUrl = "https://jsonplaceholder.typicode.com/users";
 
    //get the result
    const result = await fetch(UsersUrl,{
        //to cache or revalidate the data
        next:{revalidate:60}
    });
 
    //check the result for true or false with the HTTP status code
    if(!result.ok)
        throw new Error("Error in fetching the Posts data ")
 
    return result.json();
}
 
//Posts page method
export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="w-full p-4 md:p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Users List
      </h1>

      <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">ID</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Username</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Street</th>
              <th className="px-4 py-3 font-semibold">Suite</th>
              <th className="px-4 py-3 font-semibold">City</th>
              <th className="px-4 py-3 font-semibold">Zip Code</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="transition-colors hover:bg-blue-50"
              >
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3 font-medium">
                  {user.name}
                </td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.address.street}</td>
                <td className="px-4 py-3">{user.address.suite}</td>
                <td className="px-4 py-3">{user.address.city}</td>
                <td className="px-4 py-3">{user.address.zipcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>

    );
}