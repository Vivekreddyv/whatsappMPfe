import '../styles/itemscard.css'
const Itemscard = ({ data }) => {
    const handledeleteitem=async(data)=>{
        const response=await fetch(`http://localhost:5000/api/deleteitem/${data}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        console.log(json)
        // if(!json.success){
        //     alert('something went wrong')
        // }
    }
    return (
        <div>
            <div className={`itemcard${data.classname}`}>
                <h3 style={{ color: 'white',textAlign:'center',marginTop:'0.5rem',marginBottom:'0.5rem' }}>{data.seller}</h3>
                <img style={{ width: "18rem", height: '11rem', borderRadius: '10px' }} src={data.imageurl} alt=''></img>
                <h2 style={{ color: 'white',marginLeft:'0.5rem',marginTop:'0.8rem',marginBottom:'0.8rem' }}>{data.name}</h2>
                <h3 style={{ color: 'white',marginLeft:'0.5rem',marginTop:'0.8rem',marginBottom:'0.8rem' }}>{data.description}</h3>
                <div style={{ display: 'flex' }}>
                    <h3 style={{ color: 'white',marginLeft:'0.5rem',marginRight:'5.5rem',marginTop:'0.8rem',marginBottom:'1.5rem' }}><i class="fa-solid fa-indian-rupee-sign">&nbsp;</i>{data.price}</h3>
                    <h3 style={{ color: 'white',marginTop:'0.8rem',marginBottom:'1.5rem' }}>{new Date(data.listeddate).toLocaleDateString('en-GB')}</h3>
                </div>
            </div>
            <button id={`buy${data.classname}`}>
                BUY NOW
            </button>
            <button onClick={()=>handledeleteitem(data._id)} className={`buybtn${data.classname}`}>
                DELETE
            </button>
        </div>
    )
}
export default Itemscard