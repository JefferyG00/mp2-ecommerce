/*

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
};

const CartPanelSlice = createSlice({
name: "cart",
initialState,
reducers: {
    add: (state, action) => {
        state.amount = state.amount + 1;
        const cartItem = state.cartItems.find(
            (cartItem) => cartItem.id === action.payload.id
        );
        cartItem
         ? (cartItem.amount = cartItem.amount + 1) 
         : state.cartItems.push({...action.payload,amount: 
         1 })
    },
    increase: (state,action) => {
        state.amount = state.amount + 1;
        const itemIndex = state.cartItems.findIndex(
            (cartItem) => (cartItem.id = action.payload.id)
    );
    state.cartItems[itemIndex].amount += 1
    let total = 0
    total = state.cartItems[itemIndex].amount * state
    cartItems.price;
    },
    decrease : (state,action) =>{
        const itemIndex = state.cartItems.findIndex(
            (cartItem) => (cartItem.id = action.payload.id)
        );
        state.cartItems[itemIndex].amount > 0 &&
        state.cartItems [itemIndex].amount-- && 
        state.amount++;
    },
  },
});

*/

import "../assets/css/cartpanel.css"
import { useContext, useEffect } from "react";
import React from "react";
import { CartContext } from "../ContextList";
export default function CartPanel() {
    const [cartContents, setCartContents] = useContext(CartContext)
    console.log(cartContents)
    let [data, setData] = React.useState({});
    
    
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    async function fetchProducts() {
        let items = localStorage.getItem("CartLocalStorage");
        console.log("fetching cart items")
        if (!items || items.length == 0 || items == "") {return}
        const response = await fetch(
          `https://7rwcnp46mg.execute-api.us-west-2.amazonaws.com/staging/products/productbyarray/${items}`
        );
        let responsedata = await response.json();
        setData(responsedata);
        setCartContents(items.split(","))
        console.log(responsedata)
    }
  
    return (
        <div id="cart-panel" className="cart-panel-container">
            {data.length > 0 ? data.map((product, index) => {
                    return <div className="product-card" key={index}>
                    {product.product_name ? <h1><span>{localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length}x </span>{product.product_name}</h1> : null}
                    {product.price ? <span className="cart-panel-item-product-price-container"><h2>{product.price}</h2><h2>{(product.price * localStorage.getItem('CartLocalStorage').split(",").filter(x => x==product.product_id).length).toFixed(2)}</h2></span> : null}
                    {product.images ? (
                      <p className="cart-panel-item-product-images">IMAGES.. There would be a map function here or something..</p>
                    ) : null} 
                    </div>
                    })
                
             : null}
             
        </div>
    )
}
