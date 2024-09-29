import React, { useEffect, useRef } from 'react';
import Jordan1 from "../assets/image.png"
import Samba from "../assets/sambas.png";
import NB from "../assets/nb.png";
import Navbar from './Navbar';
import { motion, useScroll, useTransform } from "framer-motion";

const HeroData = [
  {
    id: 1,
    image: Jordan1,
    title: "Air Jordan 1 Chicago",
    subtitle: 
      "The AJ1 'Chicago' was inspired by the high-op Air Jordan 1 original colorway, first released in 1985.",
    price: "$190",
    bgColor: "#b81b2a",
    modal: "Nike",
  },
  
  {
    id: 2,
    image: NB,
    title: "New Balance 550 Green-White",
    subtitle: 
      "The original 550 debuted in 1989 and made its mark on basketball courts from coast to coast.",
    price: "$140",
    bgColor: "#28463c",
    modal: "New Balance",
  },
  
  {
    id: 3,
    image: Samba,
    title: "Adidas Samba OG",
    subtitle: 
      "Born on the pitch, the Samba is a timeless icon of street style.",
    price: "$90",
    bgColor: "#000000",
    modal: "Adidas",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeroData[0]);
  const shoeRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Create scroll-based transformations
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]); // Scale from 1 to 1.2
  const y = useTransform(scrollY, [0, 300], [0, -30]); // Move up from 0 to -30px

  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
    <motion.div
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
      className="bg-brandDark text-white min-h-screen flex flex-col"
    >
      {/* Navbar */}
      <Navbar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[570px]">
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
          <div className="space-y-5 text-center md:text-left">
              <h1 className="text-3xl lg:text-6xl xl:text-7xl font-bold text-shadow">{activeData.title}</h1>
              <p className="text-sm leading-loose text-white/80">
              {activeData.subtitle}</p>
              <button className="px-4 py-2 border-2 rounded-md border-white text-white bg-transparent inline-block mb-4 transition duration-300 hover:bg-white hover:text-black">Order Now</button>
              <br></br>
              <br></br>
              {/* Top Recommendation Section */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="w-20 h-[2px] bg-white"></div>
                <p className="font-bold">Top Recommendations</p>
                <div className="w-20 h-[2px] bg-white"></div>
              </div>
               
              {/* Image selector */}
              <div className="flex space-x-12 overflow-x-auto w-full">
                {
                  HeroData.map((data) => {
                    return (
                      <div key={data.id} className="cursor-pointer flex flex-col items-center" onClick={() => handleActiveData(data)}>
                        <div>
                          <img 
                            src={data.image} 
                            alt={data.title} 
                            className={`w-[80px] h-[80px] img-shadow ${
                                activeData.image === data.image
                                  ? "opacity-100 scale-110"
                                  : "opacity-50"
                              }`}
                          />
                        </div>
                        
                        <div className="text-white text-sm mt-1 font-bold">
                          <p>{data.price}</p>
                        </div>
                      </div>

                      
                    );
                  })
                }
              </div>
          </div>
        </div>
        
        {/* Shoe Image Section */}
        <div className="flex items-center justify-center md:justify-end order-2 md:order-3">
          <motion.img
            src={activeData.image}
            alt={activeData.title}
            ref={shoeRef}
            className="max-w-xs transition-transform duration-500" // Add hover effect here
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ rotate: 25, transition: { duration: 0.3 } }} 
          />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Hero;
