import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

const UpdateVaccineData = () => {
  const [formData, setFormData] = useState({
    citizenshipNo: "",
    dateOfBirth: "",
    vaccineName: "",
    vaccinationDate: "",
    batchNumber: "",
    district: "",
    province: "",
    localBody: "",
    healthPostName: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/vaccine-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Vaccine data updated successfully");
        navigate("/dashboard");
      } else {
        alert("Failed to update vaccine data");
      }
    } catch (err) {
      console.error("Error updating vaccine data:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Update Vaccine Data" />
      <div className="min-h-screen bg-opacity-50 backdrop-blur-md flex justify-center items-center p-6">
        <div className="bg-gray-300 bg-opacity-50 shadow-lg rounded-[2rem] p-8 w-full max-w-4xl border border-gray-400">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Vaccine Information
          </h2>
          <form onSubmit={handleSubmit} className="text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:text-lg text-sm">
              {/* Citizenship Number */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Parent's Citizenship No.</label>
                <input
                  type="text"
                  name="citizenshipNo"
                  value={formData.citizenshipNo}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Vaccine Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Vaccine Name</label>
                <input
                  type="text"
                  name="vaccineName"
                  value={formData.vaccineName}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Vaccination Date */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Date of Vaccination</label>
                <input
                  type="date"
                  name="vaccinationDate"
                  value={formData.vaccinationDate}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Batch Number */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Batch Number</label>
                <input
                  type="text"
                  name="batchNumber"
                  value={formData.batchNumber}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* District */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Province */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Province</label>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Local Body */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Local Body</label>
                <input
                  type="text"
                  name="localBody"
                  value={formData.localBody}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Health Post Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Health Post Name</label>
                <input
                  type="text"
                  name="healthPostName"
                  value={formData.healthPostName}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 mx-12 bg-green-600 text-white text-l md:text-xl md:font-semibold rounded-lg hover:bg-green-700 focus:outline-none w-full"
              >
                Update Vaccine Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVaccineData;
