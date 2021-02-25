import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Authentication from './Pages/Authentication/Authentication';
import Category from './Pages/Category/Category';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import Checkout from './Pages/Checkout/Checkout';
import { connect } from 'react-redux';
import { FirebaseAuthListener } from './Redux/auth/authActions';
import {useEffect} from 'react';
import Test from './Pages/Test/Test';
import Navbar from './Components/Navbar/Navbar';
import "./App.css"
import Product from './Pages/Product/Product';


function App({FirebaseAuthListener}) {
  useEffect(()=>{
    FirebaseAuthListener();
  },[])
  return (

    <div>
     

      <Navbar/>
      <Switch>
      <div className="pagesContainer">
      <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authentication} />
      <Route path="/categories" component={Category} />
      <Route path="/category-product/:category" component={CategoryProducts} />
      <Route path="/product/:productId" component={Product} />
      <Route path="/checkout/:orderId" component={Checkout} />
      <Route path="/test" component={Test} />

    </div>
  


    </Switch>
    </div>
   
  
  );
}


var actions={
  FirebaseAuthListener
}
export default connect(null,actions)(App);
