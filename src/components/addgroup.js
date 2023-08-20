import '../styles/addgroup.css'

const Addgroup=()=>{
    return(
        <div className='groupadd'>
            <div className='groupadd1'>
                <button style={{border:'none',backgroundColor:'transparent',color:'#d9dee0',fontSize:'1.3rem',marginBottom:'1rem',marginLeft:'1.5rem'}}><i class="fa-solid fa-arrow-left"></i></button>
                <h3 style={{color:'#d9dee0',fontSize:'1.3rem',fontWeight:'500'}}>New group</h3>
            </div>
            <div className='groupadd2'>
                <input className='groupinp' placeholder='Group Subject'></input>
                <input placeholder='Admin Name'></input>
                <input placeholder='Profile Picture(optional)'></input>
            </div>
        </div>
    )
}
export default Addgroup