"use client";

import Image from "next/image";

// import { CustomButton } from "@/components";

import CustomButton from '@/components/CustomButton'

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero pb-16 border-b">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="hero__title">
          Find, book, rent a bike & car quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your bike & car rental experience with our effortless booking
          process.
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          {/* <Image src="/hero.png" alt="hero" fill className="object-contain" /> */}
          <Image src="/heroBike.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
