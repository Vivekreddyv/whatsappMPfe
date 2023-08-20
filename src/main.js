import Addgroup from './components/addgroup'
import Groups from './components/groups'
import './styles/main.css'

const Main=()=>{
    
    return(
        <div className="main">
            <div className='groupsmain'>
                
                <Groups/>
                {/* <Addgroup/> */}
            </div>
            <div className='chatsmain'></div>
        </div>
    )
}
export default Main