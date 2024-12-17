import { AspectRatio } from "@/components/ui/aspect-ratio";

import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const SpaWellnessSection = () => {
  useEffect(() => {
    new Splide(".splide", {
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 3000,
    }).mount();
  }, []);

  return (
    <>
      <div className="text-black padding-main mt-10">
        <div className="splide">
          <div className="lg:w-3/4 lg:h-5/6 w-full h-full relative">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src="https://aguasdeibiza.com/wp-content/uploads/2019/09/Aguasdeibiza-2019-054-SPA-MEDIA.jpg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </li>
                <li className="splide__slide">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src="https://aguasdeibiza.com/wp-content/uploads/2019/09/Aguasdeibiza-2019-054-SPA-MEDIA.jpg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </li>
                <li className="splide__slide">
                  <AspectRatio ratio={16 / 9} className="bg-muted">
                    <Image
                      src="https://aguasdeibiza.com/wp-content/uploads/2019/09/Aguasdeibiza-2019-054-SPA-MEDIA.jpg"
                      alt="Photo by Drew Beamer"
                      fill
                      className="h-full w-full rounded-md object-cover"
                    />
                  </AspectRatio>
                </li>
              </ul>
            </div>
            <div className="absolute -right-[220px] top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-[400px]">
                <span>Spa & Wellnes</span>
                <h2 className="lg:text-5xl" style={{ lineHeight: "66px" }}>
                  A marine space to treat yourself and find your balance
                </h2>
                <Link
                  href="#!"
                  className="text-white underline text-2xl font-thin"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden mt-16">
          <span>Spa & Wellnes</span>
          <h2 className="md:text-4xl text-3xl mt-2">
            A marine space to treat yourself and find your balance
          </h2>
          <Link href="#!" className="text-white underline text-2xl font-thin">
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default SpaWellnessSection;
