import React from "react";
import { FaUser, FaLink, FaCog, FaSearch, FaComment } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white p-5 shadow-md">
        <h1 className="text-2xl font-bold text-red-500">Tie</h1>
        <nav className="mt-5 space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <FaUser /> <span>Homepage</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <FaCog /> <span>Requirements</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <FaComment /> <span>Chats</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <FaSearch /> <span>Search</span>
          </a>
        </nav>
        <button className="w-full mt-5 py-2 bg-gray-300 rounded">Create</button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-5">
        <button className="bg-black text-white px-4 py-2 rounded">Go Back</button>
        <div className="bg-white p-5 mt-5 rounded-lg shadow-md relative">
          <img
            src="https://via.placeholder.com/600x200"
            alt="Cover"
            className="w-full rounded-lg"
          />
          <div className="absolute top-5 left-5">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-16 h-16 rounded-full border-4 border-white"
            />
          </div>
          <div className="mt-5">
            <h2 className="text-xl font-bold">Cristopher Nolen</h2>
            <p className="text-gray-500">@Cristopher_23</p>
            <p className="text-gray-600">Entrepreneur - Noida</p>
            <p className="flex items-center text-blue-500 mt-2">
              <FaLink className="mr-2" />
              <a href="#">http://muziplex.com/re...</a>
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Moments</h3>
          <div className="flex space-x-4 mt-3">
            {Array(6)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center"
                >
                  🌟
                </div>
              ))}
          </div>
        </div>
        <div className="mt-5 bg-white p-5 rounded-lg shadow-md">
          <h4 className="font-bold">Christopher Nolan</h4>
          <p className="text-gray-600">just a moment ago</p>
          <p className="mt-3">
            The generated Lorem Ipsum is therefore always free from repetition...
          </p>
          <img
            src="https://via.placeholder.com/600x300"
            alt="Post"
            className="mt-3 rounded-lg"
          />
        </div>
      </main>
      {/* Right Sidebar */}
      <aside className="w-1/5 bg-white p-5 shadow-md">
        <h3 className="font-bold">People you may know</h3>
        {Array(3)
          .fill("")
          .map((_, i) => (
            <div key={i} className="flex items-center space-x-3 mt-3">
              <img
                src="https://via.placeholder.com/50"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">Archi Maze</p>
                <p className="text-gray-500">Entrepreneur - Noida</p>
              </div>
            </div>
          ))}
      </aside>
    </div>
  );
};

export default ProfilePage;
