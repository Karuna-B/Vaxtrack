import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/common/Header";
import StatCards from "../components/common/StatCards";
import { Users } from "lucide-react";
import { backendUrl } from "../App";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [expandedUserId, setExpandedUserId] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${backendUrl}/users/`);
        setUsers(response.data); // Set the fetched users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleToggle = (userId) => {
    setExpandedUserId((prev) => (prev === userId ? null : userId));
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users and Vaccine Information" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* Stat Cards Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards
            name="Total Users"
            icon={Users}
            value={users.length}
            color="#4CAF50"
          />
        </motion.div>

        {/* Users List */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Users List
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">User Name</th>
                  <th className="px-4 py-2 text-left">Vaccine Details</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id} className="border-b border-gray-300">
                    <td className="px-4 py-2 text-l font-semibold">
                      {user.fullName}
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleToggle(user._id)}
                        className="text-indigo-600 hover:underline"
                      >
                        {expandedUserId === user._id ? "Hide" : "Show"} Vaccine
                        Details
                      </button>

                      {expandedUserId === user._id && (
                        <div className="mt-2 p-4 bg-indigo-50 rounded-md shadow-sm">
                          {user.vaccinesTaken &&
                          user.vaccinesTaken.length > 0 ? (
                            user.vaccinesTaken.map((vaccine) => (
                              <div key={vaccine._id}>
                                <p>
                                  <strong>Vaccine Name:</strong>{" "}
                                  {vaccine.vaccineName}
                                </p>
                                <p>
                                  <strong>Vaccination Date:</strong>{" "}
                                  {new Date(
                                    vaccine.vaccinationDate
                                  ).toLocaleDateString()}
                                </p>
                                <p>
                                  <strong>Batch Number:</strong>{" "}
                                  {vaccine.batchNumber}
                                </p>
                                <p>
                                  <strong>Health Post:</strong>{" "}
                                  {vaccine.healthPostName}
                                </p>
                                <p>
                                  <strong>District:</strong> {vaccine.district}
                                </p>
                                <p>
                                  <strong>Province:</strong> {vaccine.province}
                                </p>
                                <p>
                                  <strong>Local Body:</strong>{" "}
                                  {vaccine.localBody}
                                </p>
                                <hr className="my-2" />
                              </div>
                            ))
                          ) : (
                            <p>No vaccine data available for this user.</p>
                          )}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
