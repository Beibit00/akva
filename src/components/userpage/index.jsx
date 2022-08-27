import axios from 'axios'
import { useEffect,useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom";

const URL='https://reqres.in/api/users/2'


export const UserData=()=> {
    
    const {id} = useParams()
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[lastname,setLastname]=useState("")
    const[avatar,setAvatar]=useState("")


    
    const token=localStorage.getItem('token');
    useEffect(() => {
        axios.get(`${URL}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        },
        ).then((response)=>{
            if(response.status===200){
                
                setEmail(response.data.email)

                setName(response.data.first_name)
                setLastname(response.data.last_name)
                setAvatar(response.data.avatar)

            }
        }).catch((error)=>{
            console.log(error)
        })
    }, [])



  return (
    <div>
      <div>
        <textarea name="" value={lastname} id="" cols="30" rows="2"></textarea>
        <textarea name="" value={email} id="" cols="30" rows="2"></textarea>
        <textarea name="" value={name} id="" cols="30" rows="2"></textarea>

      </div>
    </div>
  )
}
