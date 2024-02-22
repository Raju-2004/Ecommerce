import React from 'react'
import './item.css'
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <div className='item w-[300px] mb-4'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      <p className='my-[6px]'>{props.name}</p>
      <div className='item-prices flex gap-5'>
        <div className='item-price-new text-gray-500 text-lg font-semibold'>
            {props.new_price}
        </div>
        <div className="item-old-price text-lg font-medium">
            {props.old_price}
        </div>
      </div> 
    </div>
  )
}

export default Item
