import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from 'framer-motion';
import { Parallax, Pagination, Navigation } from "swiper";

type Props = {}

export default function ProjectCard({ }: Props) {
    return (
        <>
            <Swiper
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 cursor-pointer duration-200 mt-44"
            >
                <SwiperSlide>
                    <div className="py-8">
                        <motion.img
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-60 h-40 mx-auto xl:w-[500px] xl:h-[300px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">Project Title</h4>
                            <p className="font-bold text-md mt-1">Technology Used</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">A Small Go Through</p>
                            <p className=" ml-5 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda eligendi veritatis amet porro. Non voluptate magnam veniam fugit? Sit voluptates voluptatem illum consequatur enim tenetur veritatis repellat laborum eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio repudiandae obcaecati nulla error adipisci! Amet laborum aperiam ipsam adipisci veritatis quaerat vero rerum, deleniti sunt rem veniam inventore. Eveniet.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8">
                        <motion.img
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-60 h-40 mx-auto xl:w-[500px] xl:h-[300px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">Project Title</h4>
                            <p className="font-bold text-md mt-1">Technology Used</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">A Small Go Through</p>
                            <p className=" ml-5 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda eligendi veritatis amet porro. Non voluptate magnam veniam fugit? Sit voluptates voluptatem illum consequatur enim tenetur veritatis repellat laborum eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio repudiandae obcaecati nulla error adipisci! Amet laborum aperiam ipsam adipisci veritatis quaerat vero rerum, deleniti sunt rem veniam inventore. Eveniet.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8">
                        <motion.img
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-60 h-40 mx-auto xl:w-[500px] xl:h-[300px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">Project Title</h4>
                            <p className="font-bold text-md mt-1">Technology Used</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">A Small Go Through</p>
                            <p className=" ml-5 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda eligendi veritatis amet porro. Non voluptate magnam veniam fugit? Sit voluptates voluptatem illum consequatur enim tenetur veritatis repellat laborum eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio repudiandae obcaecati nulla error adipisci! Amet laborum aperiam ipsam adipisci veritatis quaerat vero rerum, deleniti sunt rem veniam inventore. Eveniet.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8">
                        <motion.img
                            initial={{
                                x: -100,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-60 h-40 mx-auto xl:w-[500px] xl:h-[300px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">Project Title</h4>
                            <p className="font-bold text-md mt-1">Technology Used</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-5.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-6.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-7.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="https://swiperjs.com/demos/images/nature-8.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">A Small Go Through</p>
                            <p className=" ml-5 text-lg">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda eligendi veritatis amet porro. Non voluptate magnam veniam fugit? Sit voluptates voluptatem illum consequatur enim tenetur veritatis repellat laborum eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio repudiandae obcaecati nulla error adipisci! Amet laborum aperiam ipsam adipisci veritatis quaerat vero rerum, deleniti sunt rem veniam inventore. Eveniet.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}