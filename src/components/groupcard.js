import { useEffect, useState } from 'react'
import '../styles/groupcard.css'

const Groupcard = ({ data }) => {
    const[status,setStatus]=useState()
    const dateobject = new Date(data.date)
    const formatteddate = dateobject.toLocaleDateString('en-Gb')
    const handleactive=()=>{
        const value=data.groupactive
        console.log(value)
        if(value){
           setStatus("Active")
        }else{
            setStatus("Not Active")

        }
    }
    useEffect(()=>{
        handleactive()
    })
    return (
        <div className='groupscard'>
            <div style={{ display: 'flex',gap:'1rem' }}>
                <img className='grouppic' src={data.imageurl} alt=''></img>
                <div className='groups1'>
                    <div>
                        <div>
                            <h4 style={{ color: 'white', margin: '0',marginTop:'1rem',fontSize:'1.1rem',marginBottom:'0.1rem' }}>{data.name}</h4>
                            <p style={{ color: 'rgba(255, 255, 255, 0.523)', margin: '0',marginBottom:'1rem' }}>{data.admin}</p>
                        </div>
                    </div>
                    <div className='date'>
                        <p style={{ color: 'rgba(255, 255, 255, 0.823)' ,margin:'0'}}>{formatteddate}</p>
                        <p style={{color:'white',fontSize:'1rem',marginTop:'0.5rem'}}>{status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Groupcard