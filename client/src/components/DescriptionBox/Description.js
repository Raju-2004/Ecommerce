import React from 'react'

const Description = () => {
  return (
    <div className='description my-[60px] mx-[165px]'>
      <div className="description-navigator flex">
        <div className="description-nav-box flex items-center justify-center text-lg font-semibold w-[171px] h-[70px] border border-solid border-gray-300 dark:text-white text-primary">
            Description
        </div>
        <div className="description-nav-box fade flex items-center justify-center text-lg font-semibold w-[171px] h-[70px] border border-solid border-gray-300 dark:text-gray-600 text-">
            Reviews (122)
        </div>
      </div>
      <div className="descriptionBox-description dark:text-white flex flex-col gap-2 border border-solid border-gray-300 p-12 pb-[70px]">
      <p>Imagine a bustling online marketplace where shoppers can explore an extensive array of products, from electronics to fashion, all at their fingertips. Our ecommerce platform offers a seamless shopping experience, combining intuitive browsing with secure transactions. Customers can effortlessly navigate through categories, browse detailed product descriptions, and make informed decisions aided by user reviews and ratings. With a streamlined checkout process and multiple payment options, purchasing becomes a breeze. Additionally, our platform prioritizes seller engagement, providing robust tools for inventory management, order fulfillment, and customer service, empowering merchants to thrive in the digital marketplace. Welcome to the future of online shopping, where convenience meets choice, and every click brings satisfaction.</p> 
      {/* <p>In our ecommerce platform, innovation intersects with user-centric design to redefine the online shopping landscape. Powered by cutting-edge technology, our platform is engineered for scalability, ensuring seamless performance even during peak traffic. Personalization takes center stage as shoppers are greeted with tailored recommendations and curated collections, enhancing their shopping journey. Embracing inclusivity, our platform fosters a vibrant community of sellers, artisans, and entrepreneurs, enabling them to showcase their unique offerings to a global audience. Moreover, our commitment to sustainability is reflected in our eco-friendly packaging options and initiatives to reduce carbon footprint. As we continue to evolve, our platform remains dedicated to revolutionizing ecommerce, where every interaction leaves a lasting impression</p> */}
      </div>
    </div>
  )
}

export default Description
