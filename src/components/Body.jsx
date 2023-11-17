import React from "react";

const Body = () => {
  return (
    <>
      <section className="text-center">
        <div className="p-16">
          <img src="" alt="logo" />
          <h1 className="font-rob font-bold text-3xl">NotesClub</h1>
          <h5>A Study Material Sharing Platform</h5>
        </div>
        <div>
          <input
            className="border-2 border-black rounded-md w-2/5 h-12 p-4"
            type="text"
            placeholder="Search Subject..."
          />
        </div>
      </section>
    </>
  );
};

export default Body;
