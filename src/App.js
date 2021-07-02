import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing1 from './components/Landing1'
import Product from "./components/Product"
import More from "./components/More"
import Crops from "./components/Crops"
import Aboutus from "./components/Aboutus"


function App() {
  return (
    <div>
 
      <BrowserRouter>
      
      <Route exact path="/" component={Landing1}></Route>
      <Route exact path="/products" component={Product}></Route>
      <Route exact path="/crops" component={Crops}></Route>
      <Route exact path="/more" component={More}></Route>
      <Route exact path="/about" component={Aboutus}></Route>

      </BrowserRouter>
      
      
    </div>

  );
}

export default App;
