import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mt-36"
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
                            className="w-32 h-32 mx-auto rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
                            src="itpath.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">It Path Solutions</h4>
                            <p className="font-bold text-2xl mt-1">Associate Technology Architect</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="reactnative.svg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="reactjs.svg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="nodejs.svg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="mongodb.svg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">Started Working.... - Ended...</p>
                            <ul className="list-disc space-y-4 ml-5 text-lg">
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8 ">
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
                            className="w-32 h-32 mx-auto rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-2.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">It Path Solutions</h4>
                            <p className="font-bold text-2xl mt-1">Associate Technology Architect</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">Started Working.... - Ended...</p>
                            <ul className="list-disc space-y-4 ml-5 text-lg">
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8 ">
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
                            className="w-32 h-32 mx-auto rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-3.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">It Path Solutions</h4>
                            <p className="font-bold text-2xl mt-1">Associate Technology Architect</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">Started Working.... - Ended...</p>
                            <ul className="list-disc space-y-4 ml-5 text-lg">
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="py-8 ">
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
                            className="w-32 h-32 mx-auto rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                            src="https://swiperjs.com/demos/images/nature-4.jpg" />
                        <div className="px-0 md:px-10 mt-4 flex flex-col justify-center items-center">
                            <h4 className="text-4xl font-light">It Path Solutions</h4>
                            <p className="font-bold text-2xl mt-1">Associate Technology Architect</p>
                            <div className="flex space-x-2 my-2">
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                                <img className="h-10 w-10 rounded-full"
                                    src="ME.jpg"
                                />
                            </div>
                            <p className="uppercase py-5 text-gray-300">Started Working.... - Ended...</p>
                            <ul className="list-disc space-y-4 ml-5 text-lg">
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                                <li>Summary Points</li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}