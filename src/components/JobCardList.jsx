import { useState } from "react";
import {} from "react-icons/fa";
import JobCard from "./JobCard";
import jobData from "../data/data_1";

const ITEMS_PER_PAGE = 10;

const JobCardList = () => {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [searchField, setSearchField] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("card");
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
  };

  const filteredData = jobData.filter((job) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    if (!searchField || !searchQuery) return true;

    if (
      searchField === "jobTitle" &&
      job.jobtitle.toLowerCase().includes(lowerCaseQuery)
    )
      return true;
    if (
      searchField === "name" &&
      job.name.toLowerCase().includes(lowerCaseQuery)
    )
      return true;
    if (
      searchField === "location" &&
      job.location.toLowerCase().includes(lowerCaseQuery)
    )
      return true;
    if (
      searchField === "companyName" &&
      job.companyname.toLowerCase().includes(lowerCaseQuery)
    )
      return true;

    return false;
  });

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* View toggle and search bar */}
      <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
        <div className="space-x-2">
          <button
            onClick={() => setViewMode("card")}
            className={`py-1 px-3 rounded ${
              viewMode === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}>
            Card View
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`py-1 px-3 rounded ${
              viewMode === "table"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}>
            Table View
          </button>

          <div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Total of {filteredData.length} cards
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-2">
          <select
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
            <option value="">Select Filter</option>
            <option value="jobTitle">Job Title</option>
            <option value="name">HR Name</option>
            <option value="location">Location</option>
            <option value="companyName">Company Name</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          />
        </div>
      </div>

      {/* Card or Table view */}
      {viewMode === "card" ? (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.slice(0, visibleItems).map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      ) : (
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow text-sm md:text-base">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
              <th className="p-3 text-left">Job Title</th>
              <th className="p-3 text-left">HR Name</th>
              <th className="p-3 text-left">More Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, visibleItems).map((job, index) => (
              <tr key={index} className="border-t dark:border-gray-700">
                <td className="p-3 text-gray-700 dark:text-gray-300">
                  {job.jobtitle}
                </td>
                <td className="p-3 text-gray-700 dark:text-gray-300">
                  {job.name}
                </td>
                <td className="p-3 text-gray-700 dark:text-gray-300">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setShowModal(true);
                    }}
                    className="text-blue-500 hover:underline">
                    Get More Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showModal && selectedJob && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              ✕
            </button>

            {/* Render JobCard details */}
            <JobCard {...selectedJob} />
          </div>
        </div>
      )}

      {/* Load More Button */}
      {visibleItems < filteredData.length && (
        <button
          onClick={loadMoreItems}
          className="py-1 px-4 mt-4 bg-blue-500 text-white rounded-sm hover:bg-blue-600 text-sm">
          Load More
        </button>
      )}

      {/* Job Count Display */}
      <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
        Showing {Math.min(visibleItems, filteredData.length)} of{" "}
        {filteredData.length} jobs / companies
      </p>
    </div>
  );
};

export default JobCardList;
