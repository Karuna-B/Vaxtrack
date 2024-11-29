import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for redirection after form submission
import Header from "../components/common/Header";

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
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to another page, e.g., the users list page
        navigate("/users");
      } else {
        alert("Failed to create user");
      }
    } catch (err) {
      console.error("Error creating user:", err);
      alert("An error occurred. Please try again.");
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
          <form onSubmit={handleSubmit} className="  text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:text-lg text-sm">
              {/* Full Name */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Father's Name */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Father's Name</label>
                <input
                  type="text"
                  name="fathersName"
                  value={formData.fathersName}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Father's Citizenship No. */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Father's Citizenship No.</label>
                <input
                  type="text"
                  name="fathersCitizenshipNo"
                  value={formData.fathersCitizenshipNo}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Mother's Name */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Mother's Name</label>
                <input
                  type="text"
                  name="mothersName"
                  value={formData.mothersName}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Mother's Citizenship No. */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Mother's Citizenship No.</label>
                <input
                  type="text"
                  name="mothersCitizenshipNo"
                  value={formData.mothersCitizenshipNo}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  required
                />
              </div>

              {/* Birth Certificate Number (optional) */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">
                  Birth Certificate Number (optional)
                </label>
                <input
                  type="text"
                  name="birthCertificateNo"
                  value={formData.birthCertificateNo}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  placeholder="123-456-7890"
                />
              </div>

              {/* Email Address (optional) */}
              <div className="flex flex-col mb-2">
                <label className=" font-medium">Email Address (optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="example@mail.com"
                />
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
