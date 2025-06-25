"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Logo from "@/../public/logo.svg";

const Footer = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    if (showCursor) {
      window.addEventListener("mousemove", move);
    } else {
      window.removeEventListener("mousemove", move);
    }
    return () => window.removeEventListener("mousemove", move);
  }, [showCursor]);

  return (
    <div className="w-full flex flex-col overflow-hidden justify-between gap-26">
      {showCursor && (
        <div
          className="fixed z-50 bg-white text-black px-2 py-1 rounded-full font-semibold transition-all duration-200"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          Yes, please 🙌
        </div>
      )}
      <div
        className="overflow-hidden w-full group"
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{
            transition: {
              duration: 80, // Slow speed on hover
              ease: "linear",
              repeat: Infinity,
            },
          }}
          className="flex flex-none gap-10 w-max cursor-none"
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-10">
              {[...Array(5)].map((_, i) => (
                <div
                  key={`${groupIndex}-${i}`}
                  className="flex items-center justify-center gap-8 w-full transition-colors duration-300 group-hover:text-lime-400"
                >
                  <span className="md:text-7xl text-3xl text-lime-400">
                    &#10038;
                  </span>
                  <h1 className="text-white group-hover:text-lime-400 text-nowrap text-3xl md:text-8xl transition-colors duration-300">
                    Try it for free
                  </h1>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 items-center justify-between mb-10 md:p-8">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="LOGO"
          className="w-40 h-auto"
        />
        <ul className="space-x-4 text-stone-500 flex items-center cursor-pointer">
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
