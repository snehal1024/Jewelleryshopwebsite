import React from 'react'
import './Designs.css'
import all_product from '../assets/all_product'
import Items from '../Items/Items'

const Designs = () => {
  return (
    <div className="designs">
        <h1>Jwellery Designs</h1>
        <hr/>
        <div className="jwellery-designs">
            {all_product.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <div className="jwellery-loadmore">
            Explore More
        </div>
    </div> 
 )
}

export default Designs