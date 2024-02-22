import React from "react";
import Img1 from "../../assets/p1.png";
import Img2 from "../../assets/p2.png";
import Img3 from "../../assets/p3.png";
import Img4 from "../../assets/p4.png";
import Img5 from "../../assets/p6.png"
import 'aos/dist/aos.css'
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "TV",
    rating: 5.0,
    color: "Black",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Laptop",
    rating: 4.5,
    color: "White",
    aosDelay: "200",
  },
  { 
    id: 3,
    img: Img3,
    title: "Watch",
    rating: 4.7,
    color: "Gray",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Speaker",
    rating: 4.4,
    color: "Gray",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Mobile Phone",
    rating: 4.5,
    color: "Blue",
    aosDelay: "800",
  },
];

const Electronic_Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* <p data-aos="fade-up" className="text-sm text-primary">
            
          </p> */}
          <h1 data-aos="fade-up" className="text-4xl text-primary mb-2 font-bold">
          POPULAR IN ElECTRONICS
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronic_Product;