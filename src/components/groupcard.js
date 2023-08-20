import '../styles/groupcard.css'

const Groupcard=()=>{
    return(
        <div>
            <div style={{ display: 'flex' }}>
                <div className='groups1'>
                    <img className='grouppic' src="https://saiuniversity.edu.in/wp-content/uploads/2021/02/default-img.jpg" alt=''></img>
                    <div>
                        <h4 style={{ color: 'white' }}>Group</h4>
                        <p style={{ color: 'white' }}>msg</p>
                    </div>
                </div>
                <div>
                    <p style={{ color: 'white' }}>date</p>
                </div>
            </div>
        </div>
    )
}
export default Groupcard