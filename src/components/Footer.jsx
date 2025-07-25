import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-10 text-center bg-neutral/90 backdrop-blur-md shadow-lg"
    >
      <motion.p
        custom={0}
        variants={fadeUp}
        className="text-primary font-franklin font-bold text-lg"
      >
        &lt; Psalmotee Tech &gt;
      </motion.p>

      <motion.p custom={1} variants={fadeUp}>
        Built with ❤️ and React
      </motion.p>

      <motion.p custom={2} variants={fadeUp}>
        &copy; {new Date().getFullYear()} Psalmotee Tech. All rights reserved.
      </motion.p>

      <motion.div
        custom={3}
        variants={fadeUp}
        className="flex space-x-6 pt-4 justify-center"
      >
        {[
          {
            href: "https://github.com/psalmotee",
            icon: <Github size={24} />,
          },
          {
            href: "https://www.linkedin.com/in/samson-moradayo-211b26187",
            icon: <Linkedin size={24} />,
          },
          {
            href: "mailto:samsonmoradeyo@gmail.com",
            icon: <Mail size={24} />,
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-primary transition-colors duration-300"
            custom={i + 4}
            variants={fadeUp}
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
