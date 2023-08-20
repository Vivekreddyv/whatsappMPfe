import { useEffect, useState } from 'react'
import '../styles/groups.css'
import '../styles/addgroup.css'

const whatsapplogo = "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"

const Groups = () => {
    const [groupdata,setGroupdata]=useState()
    const[showadd,setShowadd]=useState(false)
    const [credentials,setCredentials]=useState({name:"",admin:"",imageurl:""})
    const handlevalue=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    const handleaddgroup=async()=>{
        let imageurltosend=credentials.imageurl
        if(!imageurltosend){
            imageurltosend='https://saiuniversity.edu.in/wp-content/uploads/2021/02/default-img.jpg'
        }
        const response=await fetch('http://localhost:5000/api/groups',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name,admin:credentials.admin,imageurl:imageurltosend})
        })
        const json= await response.json()
        if(!json.success){
            alert('enter valid credentials')
            setShowadd(false)
        }
    }
    const getgroupsdata=async()=>{
        const response=await fetch('http://localhost:5000/api/displaygroup',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }})
        const data=await response.json()
        setGroupdata(data)
    }
    useEffect(()=>{
        getgroupsdata()
    },[])
    return (
        <div>
            {showadd?<div>
            <div className='groupadd'>
            <div className='groupadd1'>
                <button onClick={()=>setShowadd(false)} style={{border:'none',backgroundColor:'transparent',color:'#d9dee0',fontSize:'1.4rem',marginBottom:'1.2rem',marginLeft:'1.5rem',cursor:'pointer'}}><i class="fa-solid fa-arrow-left"></i></button>
                <h3 style={{color:'#d9dee0',fontSize:'1.3rem',fontWeight:'500'}}>New group</h3>
            </div>
            <div className='groupadd2'>
                <input className='groupinput' placeholder='Group Subject' name='name' value={credentials.name} onChange={handlevalue}></input>
                <input className='groupinput' placeholder='Admin Name' name='admin' value={credentials.admin} onChange={handlevalue}></input>
                <input className='groupinput' placeholder='Profile Picture(optional)' name='imageurl' value={credentials.imageurl} onChange={handlevalue}></input>
                <button onClick={handleaddgroup} className='tick'><i class="fa-solid fa-check"></i></button>
            </div>
        </div>
        </div>:
            <div className="groups">
            <div className='navbar'>
                <img style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem' }} src={whatsapplogo} alt=''></img>
                <button onClick={()=>setShowadd(true)} className='addgroup'>+</button>
            </div>
            <div style={{ height: '3rem', display: 'flex', alignItems: 'center' }}>
                <input className='search' placeholder='search'></input>
            </div>
            <
        </div>}
        </div>
    )
}
export default Groups