import { connect } from 'react-redux';
import { FirebaseAuthListener } from './Redux/auth/authActions';
import {useEffect, lazy, Suspense} from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//static export
import Home from './Pages/Home/Home'; 
import Authentication from './Pages/Authentication/Authentication';
import Category from './Pages/Category/Category';
import CategoryProducts from './Pages/CategoryProducts/CategoryProducts';
import Checkout from './Pages/Checkout/Checkout';
import Product from './Pages/Product/Product';
import MaterialNavBar from './Components/MaterialNavBar/MaterialNavBar'
import Test from './Pages/Test/Test';
import Navbar from './Components/Navbar/Navbar';

//dynamic export
// var Home=lazy(()=> import("./Pages/Home/Home"))
// var Authentication=lazy(()=> import("./Pages/Authentication/Authentication"))
// var Category=lazy(()=> import("./Pages/Category/Category"))
// var CategoryProducts=lazy(()=> import("./Pages/CategoryProducts/CategoryProducts"))
// var Checkout=lazy(()=> import("./Pages/Checkout/Checkout"))
// var Product=lazy(()=> import("./Pages/Product/Product"))
// // var MaterialNavBar=lazy(()=> import("./Components/MaterialNavBar/MaterialNavBar"))
// var Test=lazy(()=> import("./Pages/Test/Test"))
// var Navbar=lazy(()=> import("./Components/Navbar/Navbar"))







function App({FirebaseAuthListener}) {
  useEffect(()=>{
    FirebaseAuthListener();
  },[])
  return (

    <div>
     
      <MaterialNavBar/>
      <Switch>
      <div className="pagesContainer">
        {/* <Suspense fallback={<div>Loading ...</div>}> */}
        <Route path="/" component={Home} exact />
      <Route path="/authentication" component={Authentication} /> 
       <Route path="/categories" component={Category} />
      <Route path="/category-product/:category" component={CategoryProducts} />
      <Route path="/product/:productId" component={Product} />
      <Route path="/checkout/:orderId" component={Checkout} />
      <Route path="/test" component={Test} />

        {/* </Suspense> */}
    

    </div>
  


    </Switch>
    </div>
   
  
  );
}


var actions={
  FirebaseAuthListener
}
export default connect(null,actions)(App);
