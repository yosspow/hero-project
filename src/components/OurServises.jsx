import React from "react";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
const services = [
  {
    name: "Home Decor",
    slug: "home-decor",
    description:
      "Transform your living space with one-of-a-kind home decor items. Browse through handmade furniture, decorative pillows, wall art, candles, and more to add a personal touch to every room in your home.",
    image: "thumbnail-1.png",
  },
  {
    name: "Clothing and Apparel",
    slug: "clothing-apparel",
    description:
      "Explore a variety of handmade clothing and apparel options, including custom-made dresses, shirts, hats, and more. Each piece is crafted with care and attention to detail, ensuring a unique addition to your wardrobe.",
    image: "thumbnail-2.png",
  },
  {
    name: "Art and Collectibles",
    slug: "art-Collectibles",
    description:
      "Find unique artworks and collectibles created by skilled artisans. Whether you're looking for original paintings, sculptures, prints, or handmade crafts, you'll find something that resonates with your personal taste and aesthetic.",
    image: "thumbnail-3.png",
  },
  {
    name: "Toys and Games",
    slug: "toys-games",
    description:
      "Delight in handmade toys and games that are perfect for children and collectors alike. Discover wooden toys, stuffed animals, puzzles, and educational games that are crafted with love and creativity.",
    image: "thumbnail-5.png",
  },
];

export default function OurServices() {
  const [service, setService] = useState({
    name: "Home Decor",
    slug: "home-decor",
    description:
      "Transform your living space with one-of-a-kind home decor items. Browse through handmade furniture, decorative pillows, wall art, candles, and more to add a personal touch to every room in your home.",
    image: "thumbnail-1.png",
  });

  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="text-center">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-red-800 mb-5 md:mb-[30px] max-w-[725px]">
            Our Servises
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            Find the perfect handcrafted items tailored to your taste and needs.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
          {services.map((currService, indx) => (
            <p
              key={indx}
              className={`${currService.slug === service.slug ? "bg-red-800 text-white" : ""} text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[15px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-red-800 border-[2px] hover:border-red-800 hover:translate-y-[-2px]`}
              onClick={() => setService(currService)}
            >
              {currService.name}
            </p>
          ))}
        </div>
        <div className="tab-content mx-24  lg:gap-[30px] lg:flex bg-bg-2 branding">
          {service && (
            <>
              <div className="relative lg:w-1/2 flex justify-center">
                <img
                  className="h-full w-3/4 object-cover rounded-full"
                  src={`./assets/images/img-test.jpg`}
                  alt="Agon"
                />
              </div>
              <div className="p-5 md:p-[60px] lg:w-1/2 relative">
                <p className="text-lg  mb-[40px]">{service.description}</p>
                <button type="button" className="mt-10">
                  {" "}
                  <a
                    className="flex gap-3 items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                      Learn More
                    </span>
                    <i>
                      {" "}
                      <FaChevronRight className="text-xl" />
                    </i>
                  </a>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
