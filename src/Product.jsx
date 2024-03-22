import Price from './Price.jsx';
import './Product.css'; // we make seperate file then import


function Product({title,idx}) {
let oldprice=['12,999','70,500','5000','1250']
let newprice=['12,450','80,200','4300','1260']
let description=["cheapest 5G phone", "thinest laptop","power full ",'light shoes']
return (  <>
    <div className='Product'> 
     <h3>{title}</h3>
       <p>{description[idx]}</p>
       <Price oldprice={oldprice[idx] } newprice={newprice[idx]}/>
    </div>
    
</>)
   }

     

  export default Product;
