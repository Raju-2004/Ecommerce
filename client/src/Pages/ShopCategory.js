import React, { useContext,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import { useAuth } from '../Context/AuthContext';
import { toast } from "react-toastify";
import Item from '../components/Item/Item'
import { useNavigate } from 'react-router-dom';

const ShopCategory = (props) => {
    const notifySuccess = (message) =>
    toast.success(message, {
      // Toast configuration for success
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (errorMessage) =>
    toast.warn(errorMessage, {
      // Toast configuration for errors
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const { all_products } = useContext(ShopContext);
    const navigate = useNavigate();
    const {currentUser} = useAuth();
    console.log(currentUser);
    useEffect(() => {
        if (!currentUser) {
          navigate('/signup');
          notifyError('User needs to sign up or login!');
        }
      }, [currentUser, navigate]);
    console.log(props.category);
    return (
        <div className='shop-category dark:bg-gray-900 dark:text-white'>
            <img className='block mt-5 lg:w-10/12 ml-28 sm:w-[600px] rounded-lg' src={props.banner} alt='' />

          {/*   <div className='shopcategory-indexSort flex flex-col items-center justify-between mx-auto mt-5 px-5 sm:flex-row sm:justify-between sm:items-center sm:max-w-[800px]'>
                <p className='text-center mb-5 sm:mb-0'>
                    <span className='font-semibold'>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort py-3 sm:p-5 border border-solid border-gray-300 rounded-md">
                    Sort by <img src={dropdown_icon} alt=''/>
                </div>
            </div> */}

            <div className="shopcategory-products pl-28 mt-10 sm:mx-0 sm:mt-20 max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-40 gap-y-10">
                {
                    all_products.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        } else {
                            return null
                        }
                    })
                }
            </div>
            <div className='flex justify-center items-center mx-auto p-4  my-[80px] w-[233px] rounded-xl text-white bg-primary text-[18px] font-medium'>
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory;
