import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star.png'
import star_dull_icon from '../assets/dullstar.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart,getTotalAmount,getTotalItems,addItem,removeItem}=useContext(ShopContext);
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-priceold">${product.old_price}</div>
                <div className="productdisplay-right-pricenew">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet unde suscipit ea, dolorum vero culpa in, accusamus ad nulla quo placeat esse magnam eveniet assumenda. Distinctio sit laborum delectus et.</div>
            <button className='productdisplay-right-button' onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
            <div className='productdisplay-right-addremove'>
                <button onClick={()=>{addItem(product.id)}}>+</button>
                <button onClick={()=>{removeItem(product.id)}}>-</button>
                <button>{getTotalItems()}</button>
            </div>
            <div className="productdisplay-total-price">
                    <p><span>Total:</span></p>
                    <p><span>${getTotalAmount()}</span></p>
            </div>
            <p className="productdisplay-right-category"><span>Category:</span>Ring,Necklace,Bangles,Earring</p>
            <p className="productdisplay-right-category"><span>Tags:</span>Diamond,Gold,Platinum,Silver</p>
            <button className='productdisplay-right-buybtn'>Buy now</button>
        </div>
    </div>
)
}

export default ProductDisplay