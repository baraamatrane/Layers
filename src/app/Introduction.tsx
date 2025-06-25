"use client";
import { useScroll, useTransform } from "motion/react";
import Tag from "./Tag";
import { useEffect, useRef, useState } from "react";

const Intro = () => {
  const text =
    "You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves";
  const SplitText = text.split(" ");
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end start"], // changed for better effect
  });

  const [current, setCurrent] = useState(0);
  const wordIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, SplitText.length]
  );

  useEffect(() => {
    const unsubscribe = wordIndex.on("change", (latest) => {
      setCurrent(latest);
    });
    return unsubscribe;
  }, [wordIndex]);

  return (
    <div ref={scrollTarget} className="h-[550vh]">
      <div className="sticky top-12 flex flex-col justify-center items-center space-y-10 h-screen">
        <Tag>INTRODUCING LAYERS</Tag>
        <h2 className="text-3xl md:text-6xl text-center md:max-w-4xl w-full leading-[1.1]">
          Your creative process deserves better.
          {SplitText.map((t, i) => (
            <span
              key={i}
              style={{
                transition: "all 0.2s ease",
                transitionDelay: `${i * 5}ms`,
                opacity: Math.floor(current) >= i ? 1 : 0.1,
                transform:
                  Math.floor(current) >= i
                    ? "translateY(0px)"
                    : "translateY(10px)",
                color:
                  Math.floor(current) >= i ? "white" : "rgba(255,255,255,0.15)",
              }}
            >
              {t + " "}
            </span>
          ))}
          <br />
          <span className="text-lime-400">That's why we built Layers.</span>
        </h2>
      </div>
    </div>
  );
};

export default Intro;
