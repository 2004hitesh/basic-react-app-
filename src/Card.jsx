
import Product from './Product.jsx';
function Card(){
    let style={
        display:"flex",
        flexrWrap:"wrap",
        jsutifyContent:"center",
        alignItem:"center"

    }

   return (<div style={style}>
         <Product title="Samsung A14 5G" idx={0}/>
         <Product  title="Apple machbook"idx={1} />
         <Product  title="pavollion 15 ryzen" idx={2}/>
         <Product  title="jaguar shoot sportss"idx={3} />
   </div>)  
}

export default Card;