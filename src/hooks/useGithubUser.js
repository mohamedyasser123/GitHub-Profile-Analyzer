import { useState } from "react"
import { githubApi } from "../services/githubApi";
export const useGithubUser=()=>{
    const[user,setUser]=useState(null);
    const[repos,setRepos]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);

  const fetchUser = async (username) => {
    try {
      setLoading(true)
      setError(null)
      setUser(null)
      setRepos([])
            const [userData, reposData] = await Promise.all([
                githubApi.getUser(username),
                githubApi.getRepos(username)
            ]);
            setUser(userData);
            setRepos(reposData);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
    return{user,repos,loading,error,fetchUser}

}