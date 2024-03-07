import React, { useEffect, useState, useRef } from "react";
import Logo from "../assets/logo512.png";

const Dashboard = () => {
  const handleLogout = () => {
    // Perform logout operations like clearing tokens or user data
    // For example: localStorage.removeItem('authToken');

    // Redirect to the login page using window.location
    window.location.href = "/login";
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-purple-900 text-white py-4 relative">
        <div className="container px-4 flex items-center justify-between">
          {/* Logo and Title */}

          <div className="flex items-center">
            <img
              src={Logo}
              alt="Avatar"
              className="max-h-16 rounded-full"
              style={{ height: "70px", width: "70px" }}
            />
            <h1 className="text-4xl font-bold text-gray-300">
              Client Management Dashboard
            </h1>
          </div>
          <div className="absolute right-0 flex items-center">
            <h1 className="text-white-300 text-3xl mr-4">Welcome, Alex</h1>

            <div>
              <img
                src={Logo}
                alt="Avatar"
                className="h-8 w-8 rounded-full"
                style={{ height: "60px", width: "60px" }}
              />
            </div>
            {/* Adjust the size and style of the avatar */}
          </div>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-8">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">User List</h2>
          <button className="bg-purple-900 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
            New
          </button>
          
        </div>
        <table className="w-full">
          <thead className="border-b border-t border-gray-300">
            <tr>
              <th className="px-4 py-3">Avatar</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Reg. Date</th>
              <th className="px-4 py-3">Plan</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {/* Table rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
