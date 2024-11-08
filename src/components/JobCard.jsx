// JobCard.jsx
import { FaLinkedin } from "react-icons/fa";

const JobCard = ({
  name,
  jobtitle,
  linkedinurl,
  companyname,
  companywebsite,
  companylinkedin,
  companysocial,
  companytwitter,
  location,
  companyniche,
}) => {
  return (
    <div className="border rounded-lg p-4 bg-[#f7f8fc] shadow-md dark:bg-gray-800">
      <div className="mb-2">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <strong>Job Title:</strong>
          </p>
          <h2 className="text-[#4f78b3] dark:text-sky-300 font-semibold">
            {jobtitle}
          </h2>
        </div>
        <br />
        <div className="flex gap-3">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <strong>Company:</strong>
          </p>
          <p className="dark:text-[#f0a500] text-[#dc8627] font-semibold">
            {companyname}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <strong>Hr:</strong>{" "}
            <span className="dark:text-white font-semibold">{name}</span>
          </p>
          <a
            href={linkedinurl}
            className="pt-1 text-[#4f78b3] hover:text-[#375a8c] transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400">
        <p>
          <strong>Location:</strong>{" "}
          <span className="dark:text-white font-semibold">{location}</span>
        </p>
        <p>
          <strong>Niche:</strong>{" "}
          <span className="dark:text-white font-semibold">{companyniche}</span>
        </p>
      </div>

      <div className="job-card-footer mt-4 flex flex-wrap gap-2">
        <a
          href={companywebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4f78b3] text-sm px-2 py-1 border border-[#4f78b3] rounded hover:bg-[#4f78b3] hover:text-white transition-colors duration-300">
          Company Website
        </a>
        <a
          href={companylinkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4f78b3] text-sm px-2 py-1 border border-[#4f78b3] rounded hover:bg-[#4f78b3] hover:text-white transition-colors duration-300">
          Company LinkedIn
        </a>
        <a
          href={companysocial}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4f78b3] text-sm px-2 py-1 border border-[#4f78b3] rounded hover:bg-[#4f78b3] hover:text-white transition-colors duration-300">
          Company Facebook
        </a>
        <a
          href={companytwitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4f78b3] text-sm px-2 py-1 border border-[#4f78b3] rounded hover:bg-[#4f78b3] hover:text-white transition-colors duration-300">
          Company Twitter
        </a>
      </div>
    </div>
  );
};

export default JobCard;
