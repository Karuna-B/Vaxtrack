import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";
import { backendUrl } from "../App";
import axios from "axios";

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

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const formErrors = {};

    // Regular expression to validate batch number (only alphanumeric characters)
    const batchNumberRegex = /^[a-zA-Z0-9]+$/;

    if (!formData.citizenshipNo) formErrors.citizenshipNo = "Citizenship No. is required";
    if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.vaccineName) formErrors.vaccineName = "Vaccine Name is required";
    if (!formData.vaccinationDate) formErrors.vaccinationDate = "Vaccination Date is required";
    if (!formData.batchNumber) formErrors.batchNumber = "Batch Number is required";
    else if (!batchNumberRegex.test(formData.batchNumber)) {
      formErrors.batchNumber = "Batch Number must be alphanumeric";
    }
    if (!formData.district) formErrors.district = "District is required";
    if (!formData.province) formErrors.province = "Province is required";
    if (!formData.localBody) formErrors.localBody = "Local Body is required";
    if (!formData.healthPostName) formErrors.healthPostName = "Health Post Name is required";

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    // If there are no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          `${backendUrl}/users/create`,
          formData
        );

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
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.citizenshipNo ? "border-red-500" : ""
                  }`}
                />
                {errors.citizenshipNo && (
                  <span className="text-red-500 text-xs">{errors.citizenshipNo}</span>
                )}
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.dateOfBirth ? "border-red-500" : ""
                  }`}
                />
                {errors.dateOfBirth && (
                  <span className="text-red-500 text-xs">{errors.dateOfBirth}</span>
                )}
              </div>

              {/* Vaccine Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Vaccine Name</label>
                <input
                  type="text"
                  name="vaccineName"
                  value={formData.vaccineName}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.vaccineName ? "border-red-500" : ""
                  }`}
                />
                {errors.vaccineName && (
                  <span className="text-red-500 text-xs">{errors.vaccineName}</span>
                )}
              </div>

              {/* Vaccination Date */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Date of Vaccination</label>
                <input
                  type="date"
                  name="vaccinationDate"
                  value={formData.vaccinationDate}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.vaccinationDate ? "border-red-500" : ""
                  }`}
                />
                {errors.vaccinationDate && (
                  <span className="text-red-500 text-xs">{errors.vaccinationDate}</span>
                )}
              </div>

              {/* Batch Number */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Batch Number</label>
                <input
                  type="text"
                  name="batchNumber"
                  value={formData.batchNumber}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.batchNumber ? "border-red-500" : ""
                  }`}
                />
                {errors.batchNumber && (
                  <span className="text-red-500 text-xs">{errors.batchNumber}</span>
                )}
              </div>

              {/* District */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">District</label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.district ? "border-red-500" : ""
                  }`}
                />
                {errors.district && (
                  <span className="text-red-500 text-xs">{errors.district}</span>
                )}
              </div>

              {/* Province */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Province</label>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.province ? "border-red-500" : ""
                  }`}
                />
                {errors.province && (
                  <span className="text-red-500 text-xs">{errors.province}</span>
                )}
              </div>

              {/* Local Body */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Local Body</label>
                <input
                  type="text"
                  name="localBody"
                  value={formData.localBody}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.localBody ? "border-red-500" : ""
                  }`}
                />
                {errors.localBody && (
                  <span className="text-red-500 text-xs">{errors.localBody}</span>
                )}
              </div>

              {/* Health Post Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Health Post Name</label>
                <input
                  type="text"
                  name="healthPostName"
                  value={formData.healthPostName}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.healthPostName ? "border-red-500" : ""
                  }`}
                />
                {errors.healthPostName && (
                  <span className="text-red-500 text-xs">{errors.healthPostName}</span>
                )}
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
