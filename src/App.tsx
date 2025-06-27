
import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { UserProfile } from "./types/userProfile";
import { axiosUser } from "./types/api/user";
import { useState } from "react";

const user:UserProfile={
  id:1,
  name:"libro",
  email:"2234@l.com",
  address:"hoge"
}
export default function App() {
  const [userProfiles,setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [error,setError]=useState<boolean>(false);
  const fetchUser = ()=>{

  }
  const LoadApi = ()=>{
    setLoading(true);
    setError(false);
    axios.get<Array<axiosUser>>("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            const data:Array<UserProfile> =res.data.map((user)=>({
              id:user.id,
              name:`${user.name}(${user.username})`,
              email:user.email,
              address:`${user.address.city}${user.address.suite}${user.address.street}`
            }));
            setUserProfiles(data);
        }).catch(()=>{setError(true)}).finally(()=>{setLoading(false)});
  }
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
