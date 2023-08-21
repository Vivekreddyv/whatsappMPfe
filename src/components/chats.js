import { useEffect, useState } from 'react'
import '../styles/chats.css'
import Itemscard from './itemscard'
const Chats = ({groupname}) => {
    const [showaddproduct, setShowaddproduct] = useState(false)
    const [credentials, setCredentials] = useState({ name: "", admin: "", imageurl: "" })
    const handlevalue = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleaddgroup = async () => {
        let imageurltosend = credentials.imageurl
        if (!imageurltosend) {
            imageurltosend = 'https://saiuniversity.edu.in/wp-content/uploads/2021/02/default-img.jpg'
        }
        const response = await fetch('http://localhost:5000/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, admin: credentials.admin, imageurl: imageurltosend })
        })
        const json = await response.json()
        if (!json.success) {
            alert('enter valid credentials')
        }
        if (json.success) {
            setShowaddproduct(false)
        }
    }
    const[items,setItems]=useState([])
    const getchatsdata=async()=>{
        const response=await fetch('http://localhost:5000/api/displayitems',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        const data=json[0].filter((data)=>data.group===groupname)
        console.log(data)
        setItems(data)
  
    }
    useEffect(() => {
        getchatsdata()
    }, [groupname])
    return (
        <div>
            {!showaddproduct ?
                <div className="chat">
                    <div className="chats"></div>
                    <div className="chats1">
                        {items.map((data)=>(
                            <Itemscard key={data._id} data={data}/>
                        ))} {items.map((data)=>(
                            <Itemscard key={data._id} data={data}/>
                        ))} {items.map((data)=>(
                            <Itemscard key={data._id} data={data}/>
                        ))} {items.map((data)=>(
                            <Itemscard key={data._id} data={data}/>
                        ))}
                    </div>
                    <div className="chats2"></div>
                </div> : <div className='groupadd'>
                    <div className='groupadd1'>
                        <button onClick={() => setShowaddproduct(false)} style={{ border: 'none', backgroundColor: 'transparent', color: '#d9dee0', fontSize: '1.4rem', marginBottom: '1.2rem', marginLeft: '1.5rem', cursor: 'pointer' }}><i class="fa-solid fa-arrow-left"></i></button>
                        <h3 style={{ color: '#d9dee0', fontSize: '1.3rem', fontWeight: '500' }}>New group</h3>
                    </div>
                    <div className='groupadd2'>
                        <input className='groupinput' placeholder='Group Subject' name='name' value={credentials.name} onChange={handlevalue}></input>
                        <input className='groupinput' placeholder='Admin Name' name='admin' value={credentials.admin} onChange={handlevalue}></input>
                        <input className='groupinput' placeholder='Profile Picture(optional)' name='imageurl' value={credentials.imageurl} onChange={handlevalue}></input>
                        <button onClick={handleaddgroup} className='tick'><i class="fa-solid fa-check"></i></button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Chats