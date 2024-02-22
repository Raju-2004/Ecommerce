import React, { useContext } from 'react'
import star_icon from '../../assets/star_icon.png'
import start_dull_icon from '../../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {all_products,addToCart} = useContext(ShopContext)
  return (
    <div className='productDisplay flex mx-[170px] mb-8 dark:text-white'>
      <div className='productDisplay-left flex gap-4 mb-6'>
        <div className="productDisplay-img-list flex flex-col gap-4 ">
            <img className='h-[133px] w-[133px]' src={product.image} alt="" />
            <img className='h-[133px]'src={product.image} alt="" />
            <img className='h-[133px]'src={product.image} alt="" />
            <img className='h-[133px]'src={product.image} alt="" />
        </div>
        <div className="productDisplay-img">
            <img className='productDisplay-main-img w-[600px] h-[580px]' src={product.image} alt=''/>
        </div>
      </div>
      <div className='productDisplay-right mx-[70px] flex flex-col'>
        <h1 className='text-3d3d3d text-3xl font-bold'>{product.name}</h1>
        <div className="productDisplay-right-stars flex items-center mt-4 gap-5 text-1c1c1c text-base">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices flex mt-6  mb-3 gap-8 text-2xl font-bold">
            <div className="productDisplay-right-price-old text-gray-400 line-through">${product.old_price}</div>
            <div className="productDisplay-right-price-new text-primary/90">${product.new_price}</div>
        </div>
        <div className="productDisplay-right-description mt-5">
            A lightweight,usually knitted,pullover shirt , close-fitting and with a round neckline and short sleeves , worn as an undershirt or outer garment
        </div>
        <div className="productDisplay-right-size">
            <h1 className='mt-8 text-656565 text-xl font-semibold'>Select Size</h1>
            <div className="productDisplay-right-sizes flex my-6 gap-5">
                <div className='py-5 px-6 bg-slate-50 border border-solid border-gray-300 cursor-pointer rounded-md dark:text-black'>S</div>
                <div className='py-5 px-6 bg-slate-50 border border-solid border-gray-300 cursor-pointer rounded-md dark:text-black'>M</div>
                <div className='py-5 px-6 bg-slate-50 border border-solid border-gray-300 cursor-pointer rounded-md dark:text-black'>L</div>
                <div className='py-5 px-6 bg-slate-50 border border-solid border-gray-300 cursor-pointer rounded-md dark:text-black'>XL</div>
                <div className='py-5 px-6 bg-slate-50 border border-solid border-gray-300 cursor-pointer rounded-md'>XXL</div>
            </div>
        </div>
        <button className='py-5 px-10 w-52 font-semibold text-white bg-primary/90 mb-5 mt-2 border-none outline-none cursor-pointer' onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productDisplay-right-category mt-2"><span className='font-semibold'>Category : </span>Women , T-shirt ,Crop Top</p>
        <p className="productDisplay-right-category mt-3"><span className='font-semibold'>Tags : </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
