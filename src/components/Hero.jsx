import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ProfilePhoto from "../assets/images/Psalmotee.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="grid sm:grid-cols-2 gap-12 items-center justify-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Text Content */}
          <motion.div className="space-y-8" variants={fadeIn}>
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-5xl font-bold font-franklin">
                Hello.
              </h1>
              <p className="text-2xl font-normal">
                <span>_______</span>{" "}
                <Typewriter
                  words={["I'm Tolulope", "Psalmotee Tech"]}
                  loop={true}
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-gradient font-inter">
                Front-End Developer
              </h2>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl font-inter leading-relaxed">
              I'm a front-end developer passionate about creating beautiful,
              functional, and user-friendly web experiences. With experience in
              HTML/CSS, React, Vue, TypeScript, and modern web technologies, I
              bring ideas to life through clean code and thoughtful design.
            </p>

            <motion.div
              className="flex space-x-6"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <a
                href="#contact"
                className="btn btn-primary text-white rounded-full font-inter hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#portfolio"
                className="btn btn-secondary rounded-full font-inter hover:scale-105 transition-transform duration-300"
              >
                View Work
              </a>
            </motion.div>

            <motion.div
              className="flex space-x-6 pt-4"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://github.com/psalmotee"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/samson-moradayo-211b26187"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:samsonmoradeyo@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center sm:justify-end"
            variants={fadeIn}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-neutral flex items-center justify-center overflow-hidden">
                  <img
                    src={ProfilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 right-2 w-8 h-8 bg-secondary rounded-full"
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-4 w-12 h-12 bg-primary rounded-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
