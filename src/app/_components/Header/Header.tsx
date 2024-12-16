"use client";

import Link from "next/link";
import { useState } from "react";
import data from "../../data.json";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const [image, setImage] = useState(
    "https://aguasdeibiza.com/wp-content/uploads/2019/01/salva-lopez-esvedra-aguasdeibiza-w-1200x857.jpg"
  );
  const { pages, features } = data;

  return (
    <header className={`text-primary ${isOpenMenu ? "bg-bg-primary" : ""}`}>
      <div className="flex justify-between items-center px-10 py-8">
        <div className="text-sm lg:block hidden">
          <span>
            Grand Luxe <br />
            Hotel
          </span>
        </div>
        <div className="">
          <Link href="/home" className="md:text-2xl text-xl">
            Aguas de Ibiza
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-outline text-white md:text-lg text-base">
            Book Now
          </button>
          <GiHamburgerMenu className="md:text-4xl text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="bg-bg-primary lg:pl-32 lg:pr-20 lg:py-20 sm:pl-20 sm:pr-16 sm: py-16 px-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-4">
          <nav className="col-span-1 md:col-span-2  lg:col-span-1">
            <ul className="flex flex-col gap-4">
              {pages.map((page) => (
                <li
                  key={page.id}
                  onMouseEnter={() => setImage(page.image)}
                  onMouseLeave={() =>
                    setImage(
                      "https://aguasdeibiza.com/wp-content/uploads/2019/01/salva-lopez-esvedra-aguasdeibiza-w-1200x857.jpg"
                    )
                  }
                  className="hover:text-gray-600 transition duration-300"
                >
                  <Link href="#!" className="lg:text-3xl md:text-2xl text-xl">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 lg:block hidden">
            {image && (
              <img src={image} alt="logo" className="w-[400px] h-[500px]" />
            )}
          </div>
          <nav className="col-1 md:col-2 lg:col-1">
            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature.id}>
                  <Link href="#!" className="lg:text-xl md:text-lg text-base">
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
