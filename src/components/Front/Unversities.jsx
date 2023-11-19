import React from "react";

const Unversities = () => {
  return (
    <>
      <section className="text-center mt-40 p-20 bg-[#f5f5f5]">
        <h1 className="mb-16 font-rob font-semibold text-5xl">Universities</h1>
        <div className="grid grid-rows-2 grid-cols-3 justify-evenly gap-x-0 gap-y-16 px-8">
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="/src/assets/logo1.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Guru Gobind Singh Indraprastha <br /> University
            </h1>
            <h5>(GGSIPU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto rounded-full hover:cursor-pointer"
              src="/src/assets/logo2.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Indira Gandhi Delhi Technical University for <br />
              Women
            </h1>
            <h5>(IGDTUW)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="/src/assets/logo3.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Dr.A.P.J Abdul Kalam Technical <br /> University
            </h1>
            <h5>(AKTU aka UPTU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="/src/assets/logo4.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">University of Delhi</h1>
            <h5>(DU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="/src/assets/logo5.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">Sharda University</h1>
            <h5>(SU)</h5>
          </div>
          <div className="w-max mx-auto text-center">
            {" "}
            <img
              className="h-[150px] w-[170px] mx-auto hover:cursor-pointer"
              src="/src/assets/logo6.png"
              alt=""
            />
            <h1 className="font-medium mt-3 text-xl">
              Jaypee Institute of Information Technology
            </h1>
            <h5>(JIIT)</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unversities;
