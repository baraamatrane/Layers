"use client";
import quantumLogo from "../../public/quantum.svg";
import acmeLogo from "../../public/acme-corp.svg";
import echoValleyLogo from "../../public/echo-valley.svg";
import pulseLogo from "../../public/pulse.svg";
import outsideLogo from "../../public/outside.svg";
import apexLogo from "../../public/apex.svg";
import celestialLogo from "../../public/celestial.svg";
import twiceLogo from "../../public/twice.svg";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";

const Logo = () => {
  const logos = [
    quantumLogo,
    acmeLogo,
    echoValleyLogo,
    pulseLogo,
    outsideLogo,
    apexLogo,
    celestialLogo,
    twiceLogo,
  ];
  return (
    <div className="w-full md:py-20 flex flex-col overflow-x-clip items-center p-2 justify-center md:space-y-15 space-y-9">
      <p className="text-lg text-center md:text-xl text-stone-500 w-full md:max-w-2xl">
        Already chosen by these market leaders
      </p>
      <div className="flex overflow-hidden [mask-image:Linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] max-w-6xl">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          className="flex flex-none gap-24 pr-24"
        >
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              width={140}
              height={80}
              className="w-[140px] h-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Logo;
