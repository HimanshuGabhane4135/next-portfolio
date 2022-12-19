import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="ME.jpg"
        alt="Himanshu's About Image"
        className="mb-4 mt-32 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
        <p className="text-base text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perferendis cumque! Voluptatum qui et nisi dolores quidem quos quasi veritatis. Cupiditate sapiente quo ullam! Velit libero corporis minus eum illo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, quo saepe! Deleniti consectetur doloribus cupiditate. Pariatur quos reprehenderit saepe fugiat enim dolores error dolor et ullam voluptates est, doloremque atque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores mollitia quod cum inventore laudantium vero quasi eius beatae dicta atque ducimus fugiat doloribus, velit ipsa neque nam nihil et explicabo?</p>
      </div>
    </motion.div>
  );
}
