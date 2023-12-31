import { useState } from 'react'
import Groups from './components/groups'
import './styles/main.css'
import Chats from './components/chats'
import logo from './utils/whatsappweblogo.png'

const Main=()=>{
    const[name,setName]=useState()
    const[dp,setDP]=useState()
    const[groupids,setGroupids] =useState()
    const[groupstatus,setGroupstatus] =useState()
    const groupnamepass=(data)=>{
        setName(data)
    }
    const grouppicturepass=(data)=>{
        setDP(data)
    }
    const groupidpass=(data)=>{
        setGroupids(data)
    }
    const groupdeletenamepass=(data)=>{
        setName(data)
    }
    const groupstatuspass=(data)=>{
        setGroupstatus(data)
    }
    return(
        <div className="main">
            <div className='groupsmain'>
                <Groups groupname={groupnamepass} grouppicture={grouppicturepass} groupid={groupidpass} groupstatus={groupstatuspass}/>
            </div>
            {name?<Chats groupname={name} grouppicture={dp} groupid={groupids} groupstatus={groupstatus} groupdeletename={groupdeletenamepass}/>:
            <div className='chatsmain'>
                <img style={{width:'32vw',height:'36vh',marginTop:'22vh',marginLeft:'18vw'}} src={logo} alt=''></img>
                <h1 style={{color:'white',fontWeight:'100',textAlign:'center'}}>WhatsApp Marketplace</h1>
                <h4 style={{color:'white',fontWeight:'100',textAlign:'center'}}>An online platform within WhatsApp where users can buy, sell, and trade products and services with other users</h4>
                <h4 style={{color:'white',fontWeight:'100',textAlign:'center'}}>Use WhatsApp marketplace on up to 4 linked devices and 1 phone at the same time.</h4>
            </div>}
        </div>
    )
}
export default Main