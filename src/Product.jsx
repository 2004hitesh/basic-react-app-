
import './Product.css'; // we make seperate file then import

 
function Product({title,price}) {
       console.log(title);

    return  (
              <div className='Product'> 
                <h3>{title}</h3>
                <h4>price:{price}</h4>
              </div>
   ) }


  export default Product;
