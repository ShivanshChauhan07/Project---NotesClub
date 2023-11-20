import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#171717] text-white mt-40 ">
        <div className="flex justify-around ">
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">ABOUT</h1>
            <img
              className=" rounded-full w-16 h-16 my-4 "
              src="/src/assets/logo.jpg"
              alt=""
            />
            <p className="font-light text-sm my-5">
              Ring Road Mall, Plot No. 21, Managlam Place,
              <br /> Sector-3 Rohini, Delhi-110085
            </p>
          </div>
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">
              Courses
            </h1>
            <ul>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Computer Science Engineering
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Information Technology Engineering
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Electronics and Communication Engineering
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Electrical and Electronic Engineering
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Mechanical Engineering
              </li>
            </ul>
          </div>
          <div>
            <h1 className="p-4 font-light text-2xl tracking-[0.5rem]">PAGES</h1>
            <ul>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Home
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                About Us
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Make an Appointment
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Contact Us
              </li>
              <li className="p-3 text-sm font-light transition-colors hover:text-[#f8b40e] hover:cursor-pointer">
                Our Projects
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-white flex justify-between p-4 px-40">
        <div className="flex justify-around w-56">
          <div classname="icon ">
            <i class="fa fa-facebook-f "></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-twitter"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-instagram"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-google-plus"></i>
          </div>
          <div classname="icon border-2 border-red-600 ">
            <i class="fa fa-envelope"></i>
          </div>
        </div>
        <h1 className="text-sm text-slate-400">
          NotesClub© 2023 All Rights Reserved{" "}
          <span className="text-[#f8b40e]">Terms of Use</span> and{" "}
          <span className="text-[#f8b40e]">Privacy Policy</span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
