"use client";
import Image from "next/image";
import Image1 from "../../public/design-example-1.png";
import Image2 from "../../public/design-example-2.png";
import Cursur from "../../public/cursor-you.svg";
import { useAnimate, motion } from "motion/react";
import { useEffect } from "react";

const Hero = () => {
  const [group1Scope, animateGroup1] = useAnimate();
  const [group2Scope, animateGroup2] = useAnimate();
  const [pointer1Scope, animatePointer1] = useAnimate();
  const [pointer2Scope, animatePointer2] = useAnimate();

  useEffect(() => {
    const runAnimation = async () => {
      await animateGroup1(
        group1Scope.current,
        { opacity: 1 },
        { duration: 0.5 }
      );
      await animateGroup1(
        group1Scope.current,
        { x: 0, y: 0 },
        { duration: 0.6 }
      );
      await animatePointer1(
        pointer1Scope.current,
        { x: 200, y: [0, 100] },
        { duration: 0.6 }
      );

      await animateGroup2(
        group2Scope.current,
        { opacity: 1 },
        { duration: 0.5 }
      );
      await animateGroup2(
        group2Scope.current,
        { x: 0, y: 0 },
        { duration: 0.6 }
      );
      await animatePointer2(
        pointer2Scope.current,
        { x: -200, y: [0, -100] },
        { duration: 0.6 }
      );
    };
    runAnimation();
  }, []);

  return (
    <div
      className="py-10 relative flex items-center justify-center overflow-x-clip"
      style={{ cursor: `url(${Cursur.src}), auto` }}
    >
      {/* Group 1: Image + Pointer */}
      <motion.div
        ref={group1Scope}
        initial={{ opacity: 0, x: -100, y: 100 }}
        drag
        dragListener={true}
        className="absolute xl:block hidden top-20 left-18"
      >
        <Image
          src={Image1}
          alt="Design Example 1"
          width={500}
          height={400}
          draggable={false}
          className="xl:w-76 w-64 h-auto"
        />

        <motion.div
          ref={pointer1Scope}
          initial={{ x: 0, y: 0 }}
          drag={false}
          dragListener={false}
          className="absolute top-80 left-1/2 pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            className="w-5 h-auto -rotate-10 pointer-events-none"
          >
            <path d="M27.436 17.496l-21.345-16.449c-0.209-0.162-0.474-0.26-0.763-0.26-0.69 0-1.25 0.56-1.25 1.25 0 0.059 0.004 0.116 0.012 0.173l-0.001-0.007 3.573 26.709c0.085 0.615 0.607 1.084 1.239 1.084 0.408 0 0.771-0.196 0.999-0.499l0.002-0.003 5.551-7.42 4.916 8.513c0.221 0.373 0.621 0.618 1.078 0.618 0.69 0 1.25-0.559 1.25-1.25 0-0.228-0.061-0.441-0.167-0.625l0.003 0.006-4.915-8.513 9.203-1.099c0.624-0.076 1.102-0.603 1.102-1.241 0-0.402-0.189-0.759-0.484-0.988l-0.003-0.002zM15.44 18.568l-0.002 0.001c-0.117 0.023-0.22 0.058-0.317 0.106l0.008-0.003c-0.095 0.037-0.177 0.080-0.253 0.132l0.004-0.003c-0.111 0.073-0.207 0.158-0.288 0.256l-0.002 0.002-0.002 0.002-4.853 6.486-2.765-20.667 16.515 12.728z" />
          </svg>
          <div className="bg-red-500 rounded-full px-2 ml-5 w-fit mt-2 text-sm rounded-tl-none font-semibold">
            Bryan
          </div>
        </motion.div>
      </motion.div>

      {/* Group 2: Image + Pointer */}
      <motion.div
        ref={group2Scope}
        initial={{ opacity: 0, x: 100, y: 100 }}
        drag
        dragListener={true}
        className="absolute xl:block hidden top-20 right-10"
      >
        <Image
          src={Image2}
          alt="Design Example 2"
          width={500}
          height={400}
          draggable={false}
          className="xl:w-88 w-64 h-auto"
        />

        <motion.div
          ref={pointer2Scope}
          initial={{ x: 0, y: 0 }}
          drag={false}
          dragListener={false}
          className="absolute top-14 right-3/4 pointer-events-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            width="800px"
            height="800px"
            viewBox="0 0 32 32"
            className="w-5 h-auto -rotate-10"
          >
            <path d="M27.436 17.496l-21.345-16.449c-0.209-0.162-0.474-0.26-0.763-0.26-0.69 0-1.25 0.56-1.25 1.25 0 0.059 0.004 0.116 0.012 0.173l-0.001-0.007 3.573 26.709c0.085 0.615 0.607 1.084 1.239 1.084 0.408 0 0.771-0.196 0.999-0.499l0.002-0.003 5.551-7.42 4.916 8.513c0.221 0.373 0.621 0.618 1.078 0.618 0.69 0 1.25-0.559 1.25-1.25 0-0.228-0.061-0.441-0.167-0.625l0.003 0.006-4.915-8.513 9.203-1.099c0.624-0.076 1.102-0.603 1.102-1.241 0-0.402-0.189-0.759-0.484-0.988l-0.003-0.002zM15.44 18.568l-0.002 0.001c-0.117 0.023-0.22 0.058-0.317 0.106l0.008-0.003c-0.095 0.037-0.177 0.080-0.253 0.132l0.004-0.003c-0.111 0.073-0.207 0.158-0.288 0.256l-0.002 0.002-0.002 0.002-4.853 6.486-2.765-20.667 16.515 12.728z" />
          </svg>
          <div className="bg-blue-500 rounded-full px-2 ml-5 w-fit mt-2 text-sm rounded-tl-none font-semibold">
            Andrea
          </div>
        </motion.div>
      </motion.div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center max-w-3xl text-center p-4 mx-auto">
        <div className="text-md font-bold text-black bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-1 rounded-full mb-4">
          ✨ $7.5M seed round raised
        </div>
        <h1 className="text-5xl md:text-[4.7rem] text-center mb-4 w-full">
          Impactful Design, Created effortlessly
        </h1>
        <p className="text-lg md:text-xl text-stone-500 mb-8 w-full max-w-2xl">
          Create stunning designs with ease. Our platform empowers you to
          transform your ideas into reality, no matter your skill level.
        </p>
        <form className="flex items-center justify-between border rounded-full border-stone-800 w-full md:w-1/2 p-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 px-2 focus:outline-none"
          />
          <button className="bg-[#A3E636] text-black px-6 py-2 rounded-full cursor-pointer hover:bg-[#8CC32B] transition-colors">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
