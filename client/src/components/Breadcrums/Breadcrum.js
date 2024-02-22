import React from 'react'
import arrow_icon from '../../assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='breadcrum flex items-center gap-2 text-zinc-500 text-base font-semibold my-[60px] mx-[170px] text-capitalize'>
      HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum
