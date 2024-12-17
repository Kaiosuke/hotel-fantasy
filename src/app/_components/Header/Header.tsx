"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import data from "../../data.json";
import { HiMiniXMark } from "react-icons/hi2";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const [image, setImage] = useState(
    "https://aguasdeibiza.com/wp-content/uploads/2019/01/salva-lopez-esvedra-aguasdeibiza-w-1200x857.jpg"
  );
  const { pages, features } = data;

  return (
    <header
      className={`text-primary fixed w-full z-[999999] ${
        openMenu ? "bg-secondary" : ""
      }`}
    >
      <div className="flex justify-between items-center md:px-10 py-8 sm:px-6 px-3">
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
        <div
          className="flex items-center gap-4"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Button variant="outline" className="md:text-lg text-base ">
            Book now
          </Button>
          {openMenu ? (
            <HiMiniXMark className="md:text-4xl text-2xl cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="md:text-4xl text-2xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`bg-bg-primary lg:pl-32 lg:pr-20 lg:py-20 sm:pl-20 sm:pr-16 sm: py-16 px-10 h-screen ${
          openMenu ? "block" : "hidden"
        }`}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
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
                  className="hover:text-gray-600 transition duration-300 w-fit"
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
              <img src={image} alt="logo" className="w-[500px] h-[600px]" />
            )}
          </div>
          <nav className="col-1 md:col-2 lg:col-1 mt-10 md:mt-0">
            <ul className="flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature.id}>
                  <Link href="#!" className="lg:text-xl md:text-lg text-base">
                    {feature.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:mt-10 mt-16">
              <div className="flex items-start gap-6">
                <img
                  className="w-[80px]"
                  src="https://aguasdeibiza.com/wp-content/uploads/2019/01/small-luxury-hotels.svg"
                  alt="iconic"
                />
                <img
                  className="w-[120px]"
                  src="https://aguasdeibiza.com/wp-content/uploads/2019/02/traveller-new.svg"
                  alt="iconic 2"
                />
              </div>
              <div className="mt-4">
                <Link href="#!">
                  <img
                    src="https://aguasdeibiza.com/wp-content/uploads/2018/12/aguasdeibiza-logo.svg"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="mt-4">
                <p className="text-sm">
                  Salvador Camacho,14. 07840 Santa Eulalia del Rio, Ibiza. Islas
                  Baleares. España. Tl. 971 31 99 91
                  <Link href="#!" className="underline px-1">
                    info@aguasdeibiza.com
                  </Link>
                  © 2022 Ncalma Group
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
