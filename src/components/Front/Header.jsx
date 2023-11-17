import React from "react";

const Header = () => {
  return (
    <div className="header flex h-16  shadow-xl bg-[#343a40] text-white">
      <div className="logo my-4">
        <h1 className="px-2 text-3xl font-semibold ">NotesClub</h1>
      </div>
      <div className="options h-14 my-auto text-md font-normal  tracking-wide">
        <ul className="flex p-4 ">
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Home
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            DashBoard
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Uploads
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Favourites
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Top Contributors
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            Contact Us
          </li>
          <li className="mx-6 transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
      <div className="my-auto ml-32">
        <input
          className="rounded-sm"
          type="text"
          placeholder="Search Subject..."
        />
      </div>
      <div className="my-auto ml-5 px-2">
        <h1>Login/Signup</h1>
      </div>
    </div>
  );
};

export default Header;