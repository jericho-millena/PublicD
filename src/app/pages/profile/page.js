"use client";

import React, { useState, useEffect } from "react";
import ProfileList from "@/app/components/profile_components/ProfileList";
import FilterOptions from "@/app/components/FilterOptions";
import axios from "@/lib/axiosInstance";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    // Fetch user data from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/userList"); // Replace with your API endpoint
        setUsers(response.data); // Set fetched users
        setFilteredUsers(response.data); // Initialize filtered users
        setLoading(false); // Stop loading
      } catch (err) {
        setError("Failed to load user data. Please try again later.");
        setLoading(false); // Stop loading
      }
    };

    fetchUsers();
  }, []);

  // Function to handle filters
  const handleFilters = (filters) => {
    let filtered = users;

    if (
      filters.publicationYear?.length ||
      filters.language?.length
      // Add checks for other filter categories as needed
    ) {
      if (filters.publicationYear?.length) {
        filtered = filtered.filter((u) =>
          filters.publicationYear.some((year) => u.publicationYear === year)
        );
      }

      if (filters.language?.length) {
        filtered = filtered.filter((u) =>
          filters.language.some((language) => u.language === language)
        );
      }
    }

    // Apply the search query filter
    if (searchQuery) {
      filtered = filtered.filter((u) =>
        u.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter users based on the search query
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );

    // Combine search with other filters
    setFilteredUsers(filtered);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="p-8">
      <nav className="bg-white-600 p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <form
            className="relative w-full max-w-xl flex items-center"
            onSubmit={(e) => e.preventDefault()} // Prevent form submission
          >
            <div className="relative flex-grow">
              <input
                type="text"
                className="w-full p-2 pl-10 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch} // Update searchQuery state on input change
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-3 text-gray-600 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <span className="sr-only">Filter</span>
              </button>
            </div>
          </form>
        </div>
      </nav>

      <div className="flex">
        {/* Filter Section */}
        <div className="w-1/4">
          <FilterOptions onApplyFilters={handleFilters} />
        </div>

        {/* Profile Section */}
        <div className="w-3/4 p-4">
          {/* Grid Layout for Profile Cards */}
          <div className="grid grid-cols-3 gap-4">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <ProfileList key={user.id} user={user} />
              ))
            ) : (
              <p className="text-center text-gray-500">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
