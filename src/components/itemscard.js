const Itemscard=({data})=>{
    return(
        <div>
            <img src={data.imageurl} alt=''></img>
            <h1>{data.name}</h1>
        </div>
    )
}
export default Itemscard