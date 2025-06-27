
import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { UserProfile } from "./types/userProfile";
import { axiosUser } from "./types/api/user";
import { useState } from "react";
import { useAllUsers } from "./hooks/useAllUsers";

const user:UserProfile={
  id:1,
  name:"libro",
  email:"2234@l.com",
  address:"hoge"
}
export default function App() {
  const {getUsers,userProfiles,loading,error}=useAllUsers();
  const LoadApi=()=>getUsers();
  return (
    <div className="App">
      <button onClick={LoadApi}>LoadApi</button><br/>
      {error?(<p style={{color:"red"}}>data error</p>):
        (loading?<p>Loading...</p>:
        <>
          {
          userProfiles.map((user:UserProfile)=>(
          <UserCard key={user.id}user={user}/>
          ))
        }</>)
      }
      
    </div>
  );
}
