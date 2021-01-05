import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import AdminSignin from './auth/AdminSignin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Header from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import AdminHome from './admin/AdminHome'
<<<<<<< HEAD
// import Footer from './core/Footer'
=======
import Footer from './core/Footer'
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31

const MainRouter = (props) => {
  
  return (<div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/user/signup" component={Signup}/>
        <Route path="/auth/signin" component={Signin}/>
        <Route path="/admin-signin" component={AdminSignin}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/admin-home' component={AdminHome} />

        <Route path="/cart" component={Cart}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/shops/all" component={Shops}/>
        <Route path="/shops/:shopId" component={Shop}/>

        <Route path="/order/:orderId" component={Order}/>
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>

        <PrivateRoute path="/seller/shops" component={MyShops}/>
        <PrivateRoute path="/business/register/new" component={NewShop}/>
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>

        <Route path="/seller/stripe/connect" component={StripeConnect}/>
      </Switch>
<<<<<<< HEAD
      
=======
      <div id="sitewrapper" >
          <Footer/>
      </div>
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
    </div>)
}

export default MainRouter
