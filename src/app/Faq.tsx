"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Tag from "./Tag";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

const Faq = () => {
  const [Selected, Setselected] = useState(0);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 px-6 py-14">
      <Tag>FAQS</Tag>

      <h2 className="text-3xl md:text-6xl text-center md:max-w-4xl w-full leading-tight">
        Questions? We've got
        <br />
        <span className="text-lime-400"> answers</span>
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={
              Selected === index
                ? { height: "min-content", opacity: 1 }
                : { height: "auto", opacity: 0.7 }
            }
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`bg-[#181818] border border-white/10 overflow-hidden rounded-2xl`}
          >
            <div
              className="flex items-center justify-between cursor-pointer p-4"
              onClick={() => Setselected(index)}
            >
              <h3 className="text-white text-sm md:text-lg font-semibold">
                {faq.question}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-lime-400 transition-transform duration-300 ${
                  Selected === index ? "rotate-45" : "rotate-0"
                }`}
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <motion.p
              initial={false}
              animate={{
                opacity: Selected === index ? 1 : 0,
                y: Selected === index ? 0 : -10,
                height: Selected === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-stone-400 text-sm leading-relaxed p-4"
              style={{
                display: Selected === index ? "block" : "none",
              }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
