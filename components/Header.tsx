import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.facebook.com/himanshu.ghabhane/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#3b5998] rounded-full"
        />
        <SocialIcon
          url="https://www.instagram.com/_himanshu_gabhane_/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#8a3ab9] rounded-full"
        />
        <SocialIcon
          url="https://twitter.com/h_gabhane"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#00acee] rounded-full"
        />
        <SocialIcon
          url="https://github.com/HimanshuGabhane4135"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#3E2C00] rounded-full"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/himanshu-gabhane/"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#0A66C2] rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </Link>
      </motion.div>

    </header>
  );
}
