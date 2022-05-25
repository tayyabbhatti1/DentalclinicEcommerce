import React from 'react';
import Dentalnavbar from '../webcomp/Dentalnavbar';
import Headbar from '../webcomp/Headbar';
import Footer from '../webcomp/Footer';
import Carthome from '../webcomp/cart/Carthome';
import Cart from '../webcomp/cart/Cart';
import { CartProvider } from "react-use-cart"



const Product =()=>{
    return(
        <div>
            <Dentalnavbar/>
            <Headbar name={"Product"}/>
            <CartProvider>
            <Carthome/>
            <Cart/>
            </CartProvider>
            <Footer/>
        </div>
        
    )
    }
    export default Product;