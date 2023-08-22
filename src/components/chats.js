import { useEffect, useState } from 'react'
import '../styles/chats.css'
import '../styles/additem.css'
import Itemscard from './itemscard'
const Chats = ({ groupname,grouppicture }) => {
    const [showaddproduct, setShowaddproduct] = useState(false)
    const [credentials, setCredentials] = useState({ name: "", description: "", price: "", seller: "", imageurl: "", classname: "" })
    const handlevalue = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }
    const handleaddgroup = async () => {
        const response = await fetch('http://localhost:5000/api/itemsdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, description: credentials.description, price: credentials.price, seller: credentials.seller, group: groupname, classname: credentials.classname, imageurl: credentials.imageurl })
        })
        const json = await response.json()
        if (!json.success) {
            alert('enter valid credentials')
        }
        if (json.success) {
            setShowaddproduct(false)
        }
    }
    const [items, setItems] = useState([])
    const getchatsdata = async () => {
        const response = await fetch('http://localhost:5000/api/displayitems', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        const data = json[0].filter((data) => data.group === groupname)
        setItems(data)
    }
    const handleclass = (data) => {
        let updatedcredentials = { ...credentials }
        updatedcredentials.classname = data
        setCredentials(updatedcredentials)
    }
    const[itemssearchquery,setItemssearchquery]=useState('')
    const handlesearchchange=(event)=>{
        setItemssearchquery(event.target.value)
    }
    const filtereditemsdata=items.filter((data)=>
    data.name.toLowerCase().includes(itemssearchquery.toLowerCase()))
    useEffect(() => {
        getchatsdata()
    })
    return (
        <div>
            {!showaddproduct ?
                <div className="chat">
                    <div className="chats">
                        <div style={{display:'flex',alignItems:'center'}}>
                        <img style={{width:'3rem',height:'3rem',borderRadius:'50%'}} src={grouppicture} alt=''></img>
                        <h3 style={{color:'#e9ede5',fontSize:'1.3rem',marginLeft:'1rem'}}>{groupname}</h3>
                        </div>
                        <button className='disablebtn'>Disable</button>
                    </div>
                    <div className="chats1">
                        {filtereditemsdata.map((data) => (
                            <Itemscard key={data._id} data={data} />
                        ))}
                    </div>
                    <div className="chats2">
                        <button onClick={() => setShowaddproduct(true)} className='addgroup'>+</button>
                        <input className='searchitems' placeholder="search items" value={itemssearchquery} onChange={handlesearchchange}></input>
                    </div>
                </div> : <div className='groupadditem'>
                    <div className='groupadd1item'>
                        <button onClick={() => setShowaddproduct(false)} style={{ border: 'none', backgroundColor: 'transparent', color: '#d9dee0', fontSize: '1.4rem', marginBottom: '1.2rem', marginLeft: '1.5rem', cursor: 'pointer' }}><i class="fa-solid fa-arrow-left"></i></button>
                        <h3 style={{ color: '#d9dee0', fontSize: '1.3rem', fontWeight: '500' }}>POST AD</h3>
                    </div>
                    <div className='groupadd2item'>
                        <input className='groupinputitem' placeholder='Group Subject' name='name' value={credentials.name} onChange={handlevalue}></input>
                        <input className='groupinputitem' placeholder='description' name='description' value={credentials.description} onChange={handlevalue}></input>
                        <input className='groupinputitem' placeholder='product images' name='imageurl' value={credentials.imageurl} onChange={handlevalue}></input>
                        <input className='groupinputitem' placeholder='price' name='price' value={credentials.price} onChange={handlevalue}></input>
                        <input className='groupinputitem' placeholder='seller Name' name='seller' value={credentials.seller} onChange={handlevalue}></input>
                        <div>
                            <button className='itembtn' onClick={() => handleclass('left')}>BUYER</button>
                            <button className='itembtn' onClick={() => handleclass('right')}>SELLER</button>
                        </div>
                        <button onClick={handleaddgroup} className='tickitem'><i class="fa-solid fa-check"></i></button>
                    </div>
                </div>
            }
        </div>
    )
}
export default Chats