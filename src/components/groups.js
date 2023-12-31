import { useEffect, useState } from 'react'
import '../styles/groupcard.css'
import '../styles/groups.css'
import '../styles/addgroup.css'
import Groupcard from './groupcard'
const whatsapplogo = "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN"

const Groups = ({ groupname,grouppicture,groupid,groupstatus }) => {
    const [groupactive, setGroupactive] = useState("")
    const handleactivegroup = (id) => {
        return groupactive === id ? "groupscardactive" : "groupscard"
    }
    const [searchquery,setSearchquery]=useState("")
    const handlesearchquery=(event)=>{
        setSearchquery(event.target.value)
    }
    const [groupdata, setGroupdata] = useState([])
    const [showadd, setShowadd] = useState(false)
    const [credentials, setCredentials] = useState({ name: "", admin: "", imageurl: "" })
    const handlevalue = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const filtereddata=groupdata.filter((data)=>data.name.toLowerCase().includes(searchquery.toLowerCase()))
    const handleaddgroup = async () => {
        let imageurltosend = credentials.imageurl
        if (!imageurltosend) {
            imageurltosend = 'https://saiuniversity.edu.in/wp-content/uploads/2021/02/default-img.jpg'
        }
        const response = await fetch('https://whatsappmarketplace.onrender.com/api/groups', {
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
            setShowadd(false)
            setTimeout(() => {
                getgroupsdata()
            }, 1000)
        }
    }
    const getgroupsdata = async () => {
        const response = await fetch('https://whatsappmarketplace.onrender.com/api/displaygroup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setGroupdata(data[0])
    }
    const handlegroupnamepass = (datas) => {
        let data = datas
        groupname(data)
    }
    const handlegrouppicturepass=(datas)=>{
        let data=datas
        grouppicture(data)
    }
    const handlegroupidpass=(data)=>{
        let datas=data
        groupid(datas)
        setGroupactive(data._id)
    }
    const handlegroupstatuspass=(data)=>{
        let datas=data
        groupstatus(datas)
    }
    useEffect(() => {
        getgroupsdata()
    }, [groupdata])
    return (
        <div>
            {showadd ? <div>
                <div className='groupadd'>
                    <div className='groupadd1'>
                        <button onClick={() => setShowadd(false)} style={{ border: 'none', backgroundColor: 'transparent', color: '#d9dee0', fontSize: '1.4rem', marginBottom: '1.2rem', marginLeft: '1.5rem', cursor: 'pointer' }}><i class="fa-solid fa-arrow-left"></i></button>
                        <h3 style={{ color: '#d9dee0', fontSize: '1.3rem', fontWeight: '500' }}>New group</h3>
                    </div>
                    <div className='groupadd2'>
                        <input className='groupinput' placeholder='Group Subject' name='name' value={credentials.name} onChange={handlevalue}></input>
                        <input className='groupinput' placeholder='Admin Name' name='admin' value={credentials.admin} onChange={handlevalue}></input>
                        <input className='groupinput' placeholder='Profile Picture(optional)' name='imageurl' value={credentials.imageurl} onChange={handlevalue}></input>
                        <button onClick={handleaddgroup} className='tick'><i class="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </div> :
                <div className="groups">
                    <div className='navbar'>
                        <img style={{ borderRadius: '50%', width: '2.5rem', height: '2.5rem' }} src={whatsapplogo} alt=''></img>
                        <button onClick={() => setShowadd(true)} className='addgroup'>+</button>
                    </div>
                    <div style={{ height: '3rem', display: 'flex', alignItems: 'center' }}>
                        <input className='search' placeholder='search' value={searchquery} onChange={handlesearchquery}></input>
                    </div>
                    {filtereddata.length === 0 ? null : filtereddata.map((data) => (
                        <div onClick={() => {
                            handlegroupidpass(data._id)
                            handlegroupnamepass(data.name)
                            handlegrouppicturepass(data.imageurl)
                            handlegroupstatuspass(data.groupactive)
                        }} className={`${handleactivegroup(`${data._id}`)}`}>
                            <Groupcard key={data._id} data={data} />
                        </div>
                    ))}

                </div>}
        </div>
    )
}
export default Groups