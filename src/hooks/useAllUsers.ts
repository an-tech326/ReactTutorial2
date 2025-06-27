import { useState } from "react";
import { UserProfile } from "../types/userProfile";
import { axiosUser } from "../types/api/user";
import axios from "axios";

export const useAllUsers=()=>{
  const [userProfiles,setUserProfiles] = useState<Array<UserProfile>>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [error,setError]=useState<boolean>(false);
  const getUsers=()=>{
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
  return {getUsers,userProfiles,loading,error}
}