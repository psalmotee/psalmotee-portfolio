import { Code } from "lucide-react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="py-10 text-center bg-neutral/90 backdrop-blur-md shadow-lg">
      <p>
        Psalmotee Tech <Code className="inline text-purple-500" />{" "}
      </p>
      <p> Built with Love</p>
      <p>
        &copy; {new Date().getFullYear()} Psalmotee Tech. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6 pt-4 justify-center">
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
      </div>
    </footer>
  );
}

export default Footer;
