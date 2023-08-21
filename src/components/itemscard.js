const Itemscard=({data})=>{
    console.log(data)
    return(
        <div>
            <img src={data[0].imageurl} alt=''></img>
            <h1>{data.name}</h1>
        </div>
    )
}
export default Itemscard