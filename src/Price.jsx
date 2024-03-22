
export default function Price({oldprice,newprice}){
  
    return <>
    <div style={{marginTop:"30px", height:"40px",backgroundColor:"yellow" ,color:"black", borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px"}}>
        <span style={{textDecorationLine:"line-through"}}>{oldprice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={{fontWeight:"800"}}>{newprice}</span>
    </div>
    </>
}