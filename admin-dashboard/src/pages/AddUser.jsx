import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios directly
import Header from "../components/common/Header";
import { backendUrl } from "../App";

const AddUser = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fathersName: "",
    fathersCitizenshipNo: "",
    mothersName: "",
    mothersCitizenshipNo: "",
    dateOfBirth: "",
    birthCertificateNo: "",
    phoneNumber: "",
    email: "",
    vaccinesIds: [],
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const formErrors = {};

    // Regular Expressions for validation
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check required fields
    if (!formData.fullName) formErrors.fullName = "Full Name is required";
    if (!formData.fathersName)
      formErrors.fathersName = "Father's Name is required";
    if (!formData.fathersCitizenshipNo)
      formErrors.fathersCitizenshipNo = "Father's Citizenship No. is required";
    if (!formData.mothersName)
      formErrors.mothersName = "Mother's Name is required";
    if (!formData.mothersCitizenshipNo)
      formErrors.mothersCitizenshipNo = "Mother's Citizenship No. is required";
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "Phone Number is required";

    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (formData.email && !emailRegex.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }

    return formErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        console.log("Form data being sent:", formData); // Debugging
        const response = await axios.post(
          `${backendUrl}/users/create`,
          formData
        );

        if (response.status === 201) {
          alert("User Created")
          navigate("/");
        } else {
          console.error("Unexpected response:", response);
          alert("Failed to create user. Please try again.");
        }
      } catch (err) {
        console.error(
          "Error creating user:",
          err.response?.data || err.message
        );
        if (err.response?.status === 400) {
          alert("Validation error: " + err.response.data.message);
        } else {
          alert("An unexpected error occurred.");
        }
      }
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Add New User" />
      <div className="min-h-screen bg-opacity-50 backdrop-blur-md flex justify-center items-center p-6">
        <div className="bg-gray-300 bg-opacity-50 shadow-lg rounded-[2rem] p-8 w-full max-w-4xl border border-gray-400">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            User Information
          </h2>
          <form onSubmit={handleSubmit} className="text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:text-lg text-sm">
              {/* Full Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-medium">Date Of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth" // Ensure this matches the field in `formData`
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              {/* Father's Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Father's Name</label>
                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.fathersName ? "border-red-500" : ""
                  }`}
                />
                {errors.fathersName && (
                  <span className="text-red-500 text-xs">
                    {errors.fathersName}
                  </span>
                )}
              </div>

              {/* Father's Citizenship No. */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Father's Citizenship No.</label>
                <input
                  type="text"
                  name="fathersCitizenshipNo"
                  value={formData.fathersCitizenshipNo}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.fathersCitizenshipNo ? "border-red-500" : ""
                  }`}
                />
                {errors.fathersCitizenshipNo && (
                  <span className="text-red-500 text-xs">
                    {errors.fathersCitizenshipNo}
                  </span>
                )}
              </div>

              {/* Mother's Name */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Mother's Name</label>
                <input
                  type="text"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.mothersName ? "border-red-500" : ""
                  }`}
                />
                {errors.mothersName && (
                  <span className="text-red-500 text-xs">
                    {errors.mothersName}
                  </span>
                )}
              </div>

              {/* Mother's Citizenship No. */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Mother's Citizenship No.</label>
                <input
                  type="text"
                  name="mothersCitizenshipNo"
                  value={formData.mothersCitizenshipNo}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.mothersCitizenshipNo ? "border-red-500" : ""
                  }`}
                />
                {errors.mothersCitizenshipNo && (
                  <span className="text-red-500 text-xs">
                    {errors.mothersCitizenshipNo}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 ${
                    errors.phoneNumber ? "border-red-500" : ""
                  }`}
                  placeholder="123-456-7890"
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-xs">
                    {errors.phoneNumber}
                  </span>
                )}
              </div>

              {/* Email Address (optional) */}
              <div className="flex flex-col mb-2">
                <label className="font-medium">Email Address (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="example@mail.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 mx-12 bg-green-600 text-white text-l md:text-xl md:font-semibold rounded-lg hover:bg-green-700 focus:outline-none w-full"
              >
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
