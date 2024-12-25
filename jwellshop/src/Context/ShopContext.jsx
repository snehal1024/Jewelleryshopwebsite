import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart ={};
    for(let index=0;index<300+1;index++)
    {
        cart[index]=0;
    }
    return cart;
}

const getDefaultItem=()=>
{
    let it={};
    for(let index=0;index< 300+1;index++)
        {
            it[index]=0;
        }
        return it;
}

const ShopContextProvider =(props)=>
{
    const [all_product,setAll_Product]=useState([]);
    const [cartItems,setCartItems]=useState(getDefaultCart());
    const [Items,setItems]=useState(getDefaultItem());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAll_Product(data))

        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/getcart',{
                method:'Post',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json()).then((data)=>setCartItems(data));
        }
    },[])

    const addToCart= (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token'))
        {
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((response)=>response.json()).then((data)=>console.log(data));
        }        
    }

    const removeFromCart= (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((response)=>response.json()).then((data)=>console.log(data));
        }
    }

    const getTotalCartAmount= ()=>{
        let totalAmount=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo= all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.new_price* cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>
    {
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    const addItem= (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(Items);
        
    }

    const removeItem= (itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalItems=()=>
    {
        let total=0;
        for(const item in Items)
        {
            if(Items[item]>0)
            {
                total+=Items[item];
            }
        }
        return total;
    }

    const getTotalAmount= ()=>{
        let totalAmt=0;
        for(const item in Items)
        {
            if(Items[item]>0)
            {
                let itemInfo= all_product.find((product)=>product.id===Number(item))
                totalAmt+=itemInfo.new_price* Items[item];
            }
        }
        return totalAmt;
    }

    const contextValue ={getTotalAmount,getTotalItems,addItem,removeItem,getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;