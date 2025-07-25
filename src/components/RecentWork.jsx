import React from "react";
import { Github, ExternalLink } from "lucide-react";
import TeamCol from "../assets/images/Projects-Shoot/Team Col.png";
import CodeQuest from "../assets/images/Projects-Shoot/CodeQuest.png";
import ToDo from "../assets/images/Projects-Shoot/ToDo.png";
import ReceiptGen from "../assets/images/Projects-Shoot/ReceiptGen.png";
import { motion } from "framer-motion";

const RecentWork = () => {
  const projects = [
    {
      title: "Team Collaboration Dashboard",
      description:
        "A full-featured collaboration platform built with React and Firebase, featuring Google/GitHub OAuth, role-based access control (Admin/Member), and real-time team discussions. Users can upload and crop profile photos, and the UI is crafted using TailwindCSS with DaisyUI for a clean, responsive experience. This project deepened my skills in Firestore security rules, auth conflict resolution, and performance optimization through code splitting and lazy loading—ensuring a faster, more scalable application.",
      image: TeamCol,
      tech: ["React", "firebase", "TailwindCSS", "DaisyUI"],
      github: "https://github.com/psalmotee/bullet-react",
      externalLink: "https://bullet-proof-react.netlify.app",
    },
    {
      title: "CodeQuest (AltSchool Africa Capstone)",
      description:
        "As part of a cross-functional team, I contributed to CodeQuest, a React-based capstone project, where I developed reusable components, integrated APIs, and collaborated with backend and UI/UX teams in Agile sprints. I worked on translating Figma designs into pixel-perfect components while ensuring accessibility and maintainability.",
      image: CodeQuest,
      tech: ["React", "TailwindCSS", "Framer Motion", "Figma"],
      github: "https://github.com/psalmotee/Codequest",
      externalLink: "https://codequest-gaming.netlify.app",
    },

    {
      title: "Todo List Web App",
      description:
        "A lightweight task manager built using React JavaScript. It supports task creation, filtering (e.g., completed vs. active), and persistent storage via localStorage. This project highlights my understanding of DOM manipulation and state-driven UI updates.",
      image: ToDo,
      tech: ["React", "ChakraUI", "API Integration"],
      github: "https://github.com/psalmotee/Todo",
      externalLink: "https://todo-app-alpha-amber-25.vercel.app/",
    },

    {
      title: "Receipt Generator App",
      description:
        "A dynamic web application that generates printable receipts based on user input. Developed using HTML, CSS, and JavaScript, it features form validation, dynamic rendering, and basic print styling for real-world usability.",
      image: ReceiptGen,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/psalmotee/kennedy-Sales-Receipt-Generator",
      externalLink: "https://kennedy-soft-tech-link-receipt-app.netlify.app/",
    },
  ];

  return (
    <section className="py-20 px-6 bg-portfolio-bg text-white font-inter">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-franklin mb-4">
            Recent Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-gray-300 text-lg mt-4">
            A collection of projects I've worked on.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="grid sm:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image on left for odd-indexed projects */}
              <motion.div
                className={`${
                  index % 2 === 1 ? "sm:order-1" : "sm:order-2"
                } w-full h-full rounded-xl overflow-hidden shadow-lg flex items-center justify-center`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-3xl bg-neutral flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content on right for odd-indexed projects */}
              <motion.div
                className={`space-y-6 ${
                  index % 2 === 1 ? "sm:order-2" : "sm:order-1"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm text-secondary uppercase tracking-wide font-medium">
                  Featured Project
                </p>
                <h3 className="text-lg font-bold font-franklin">
                  {project.title}
                </h3>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-gray-200 text-base leading-relaxed">
                  {project.description}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.externalLink}
                    className="btn btn-primary text-white px-8 py-3 rounded-full font-inter hover:scale-105 transition-transform duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-outline btn-secondary px-8 py-3 rounded-full font-inter hover:scale-105 transition-transform duration-300"
                  >
                    <Github size={16} className="mr-2" />
                    <span>View Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
