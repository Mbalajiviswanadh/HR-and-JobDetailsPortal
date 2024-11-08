import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-8">
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Dataset from{" "}
        <a
          href="https://www.linkedin.com/in/rohandubey415/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
          Rohan Dubey
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 ">
        Created by{" "}
        <a
          href="https://www.linkedin.com/in/balaji-viswanadh-madhavareddy-875473220/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 dark:text-blue-400">
          Viswanadh
        </a>{" "}
        <a
          href="https://github.com/Mbalajiviswanadh/HR-and-JobDetailsPortal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
          <FaGithub className="ml-1" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
