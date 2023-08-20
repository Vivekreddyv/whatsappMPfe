import { useState } from 'react'
import '../styles/groups.css'
import Addgroup from './addgroup'
const whatsapplogo = "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"

const Groups = () => {
    const [credentials,setCredentials]=useState()
    const getgroupsdata=async()=>{
        const response=await fetch('http://localhost:5000/api/groups',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }})
        const data=await response.json()
    }
    const addgroup=async()=>{
        const response=await fetch('http://localhost:5000/api/groups',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }})
        const data=await response.json()
    }
    return (
        <div className="groups">
            {/* <div className='navbar'>
                <img style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem' }} src={whatsapplogo} alt=''></img>
                <button className='addgroup'>+</button>
            </div>
            <div style={{ height: '3rem', display: 'flex', alignItems: 'center' }}>
                <input className='search' placeholder='search'></input>
            </div> */}
            <Addgroup/>
        </div>
    )
}
export default Groups