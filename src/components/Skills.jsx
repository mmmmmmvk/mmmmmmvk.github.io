import React from 'react'
import { motion } from "motion/react"

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: {
        opacity: 1,
        y: 0,
    },
};


const Skills = () => {
  return (
    <div>
    <motion.h1
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}>
    I'm specialized in:
    </motion.h1>
    <motion.div     
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }} className="skill-1">
    <motion.h2>
        Adobe After Effects
    </motion.h2>
    <motion.img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/512px-Adobe_After_Effects_CC_icon.svg.png" alt="Aelogo" />
    </motion.div>
    <motion.div variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }} className="skill-2">
    <motion.h2>
        Adobe Illustrator
    </motion.h2>
    <motion.img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Aelogo" />
    </motion.div>
    <motion.div 
    variants={fadeInAnimationVariants}
    initial="initial"
    whileInView="animate"
    viewport={{once: true,}}
    transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }} className="skill-3">
    <motion.h2>
        Maxon Cinema 4D
    </motion.h2>
    <motion.img src="https://upload.wikimedia.org/wikipedia/fr/d/d8/C4D_Logo.png" alt="Aelogo" />
    </motion.div>
    </div>
  )
}

export default Skills