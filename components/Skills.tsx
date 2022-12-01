import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center  mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for profieciency</h3>
            <div className="grid grid-cols-4 gap-5 xl:mt-24 md:mt-20">
                <Skill src="html.svg" level={82} />
                <Skill src="css.svg" level={82} />
                <Skill src="js.svg" level={82} />
                <Skill src="ts.svg" level={82} />
                <Skill src="git.svg" level={82} />
                <Skill src="mysql.svg" level={82} />
                <Skill src="mongodb.svg" level={82} />
                <Skill src="nextjs.svg" level={82} />
                <Skill src="reactjs.svg" level={82} />
                <Skill src="reactnative.svg" level={82} />
                <Skill src="sass.svg" level={82} />
                <Skill src="nodejs.svg" level={82} />
            </div>
        </motion.div>
    )
}