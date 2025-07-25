import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  Zap,
  Globe,
  Github,
  Settings,
} from "lucide-react";
import { SiReact, SiTypescript, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const skills = [
    { name: "HTML & CSS", icon: Code, color: "text-purple-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    {
      name: "Tailwind CSS, DaisyUI, Etc.",
      icon: Palette,
      color: "text-teal-400",
    },
    { name: "Git", icon: Github, color: "text-orange-400" },
    { name: "Responsive Design", icon: Smartphone, color: "text-pink-400" },
    { name: "Performance Optimization", icon: Zap, color: "text-red-400" },
    { name: "Accessibility", icon: Settings, color: "text-yellow-500" },
    {
      name: "Cross-Browser Compatibility",
      icon: Globe,
      color: "text-gray-400",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        {/* Title */}
        <motion.div className="text-center mb-16" variants={fadeIn} custom={0}>
          <h2 className="text-4xl lg:text-5xl font-bold font-franklin mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            {[...Array(2)].map((_, i) => (
              <motion.p
                key={i}
                className="text-lg text-gray-300 leading-relaxed font-inter"
                variants={fadeIn}
                custom={i + 1}
              >
                {i === 0
                  ? "I started my journey in web development out of a curiosity for how websites worked. That curiosity grew into a passion for solving problems and building interactive experiences from the ground up. Today, I continue to enjoy the process of turning ideas into real, usable products."
                  : "I specialize in front-end development, focusing on creating responsive, accessible, and performant web applications. My goal is to deliver high-quality code that not only meets the needs of users but also provides a seamless experience across all devices and browsers."}
              </motion.p>
            ))}

            {/* Quick Traits */}
            <motion.div
              className="flex items-center space-x-4"
              variants={fadeIn}
              custom={3}
            >
              <div className="flex items-center space-x-2">
                <Zap className="text-primary" size={20} />
                <span className="text-gray-300 font-inter">
                  Fast Development
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="text-secondary" size={20} />
                <span className="text-gray-300 font-inter">Mobile First</span>
              </div>
            </motion.div>
          </div>

          {/* Skills Card */}
          <motion.div className="relative" variants={fadeIn} custom={4}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-neutral/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold font-franklin mb-6 text-center">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-3"
                    variants={fadeIn}
                    custom={5 + index}
                  >
                    <skill.icon size={22} className={`${skill.color}`} />
                    <span className="text-gray-300 font-inter">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
