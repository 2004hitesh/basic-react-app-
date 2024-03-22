
import './App.css';
import Product from './Product.jsx';


function App() {

   return (<div>
      <Product title='laptop' price={50000}/> 
      <Product title='pen' price={10}/> 
      <Product title='lock' price={100} />
   </div>)  

}
export default App;
