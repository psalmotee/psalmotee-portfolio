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
import { SiReact, SiTypescript, SiJavascript, } from "react-icons/si";

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
    // { name: "Next.js", icon: Globe, color: "text-gray-300" },
    // { name: "Node.js", icon: Database, color: "text-green-400" },
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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-franklin mb-4">
            About
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
                        <p className="text-lg text-gray-300 leading-relaxed font-inter">
              I started my journey in web development out of a curiosity for how
              websites worked. That curiosity grew into a passion for solving
              problems and building interactive experiences from the ground up.
              Today, I continue to enjoy the process of turning ideas into real,
              usable products.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed font-inter">
              I specialize in front-end development, focusing on creating
              responsive, accessible, and performant web applications. My goal is
              to deliver high-quality code that not only meets the needs of users
              but also provides a seamless experience across all devices and
              browsers.
            </p>

            <div className="flex items-center space-x-4">
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
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-neutral/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold font-franklin mb-6 text-center">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-all duration-300 hover:scale-105"
                  >
                    <skill.icon className={skill.color} size={24} />
                    <span className="text-gray-300 font-inter">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
