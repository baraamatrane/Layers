"use client";
import Image from "next/image";
import IntegrationCard from "./IntegrationCard";
import Tag from "./Tag";
import Figma from "@/../public/figma-logo.svg";
import GitHub from "@/../public/github-logo.svg";
import Slack from "@/../public/slack-logo.svg";
import Notion from "@/../public/notion-logo.svg";
import Relume from "@/../public/relume-logo.svg";
import Framer from "@/../public/framer-logo.svg";
import { motion } from "motion/react";

// Create two arrays for the IntegrationCards
const leftIntegrations = [
  {
    title: "Figma",
    description: "Figma is a collaborative interface design tool.",
    logo: Figma,
    alt: "Figma",
  },
  {
    title: "GitHub",
    description: "GitHub is the leading platform for code collaboration.",
    logo: GitHub,
    alt: "GitHub",
  },
  {
    title: "Slack",
    description: "Slack is a powerful team communication platform.",
    logo: Slack,
    alt: "Slack",
  },
];

const rightIntegrations = [
  {
    title: "Notion",
    description: "Notion is an all-in-one workspace for notes and docs.",
    logo: Notion,
    alt: "Notion",
  },
  {
    title: "Framer",
    description: "Framer is a professional website prototyping tool.",
    logo: Framer,
    alt: "Framer",
  },
  {
    title: "Relume",
    description: "Relume is a no-code website builder and design system.",
    logo: Relume,
    alt: "Relume",
  },
];

const Integration = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col lg:justify-around justify-center items-center gap-6 lg:p-14 p-5">
      <div className="w-full max-w-[30rem] space-y-5 flex flex-col justify-center items-center lg:items-start">
        <Tag className="lg:text-start text-center">INTEGRATIONS</Tag>
        <h2 className="text-4xl lg:text-start text-center md:text-6xl md:max-w-6xl w-full">
          Plays well with
          <br />
          <span className="text-lime-400 "> others</span>
        </h2>
        <p className="text-stone-400 text-lg">
          Layers seamlessly connects with your favorite tools, making it easy to
          plug into any workflow and collaborate across platforms.
        </p>
      </div>

      <div className="h-[700px] max-h-9/12 overflow-hidden relative flex gap-4 items-center justify-center [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          initial={{ y: "-37%%" }}
          animate={{ y: "30%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="space-y-4"
        >
          {[
            ...rightIntegrations,
            ...leftIntegrations,
            ...rightIntegrations,
          ].map((integration, i) => (
            <IntegrationCard
              key={integration.title + i}
              title={integration.title}
              description={integration.description}
            >
              <Image
                src={integration.logo}
                alt={integration.alt}
                width={200}
                height={100}
                className="w-24 h-auto"
              />
            </IntegrationCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: "32%%" }}
          animate={{ y: "-35%" }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="space-y-4"
        >
          {[...leftIntegrations, ...rightIntegrations, ...leftIntegrations].map(
            (integration, i) => (
              <IntegrationCard
                key={i}
                title={integration.title}
                description={integration.description}
              >
                <Image
                  src={integration.logo}
                  alt={integration.alt}
                  width={200}
                  height={100}
                  className="w-24 h-auto"
                />
              </IntegrationCard>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default Integration;
