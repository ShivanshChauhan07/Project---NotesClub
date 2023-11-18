import React, { useEffect, useState } from "react";
import Data from "../../assets/Data";
import { SearchResultList } from "../Search/SearchResultList";

const Body = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const handleChange = (e) => {
    setSearch(e.target.value);
    const Filresult = Data.filter((title) => {
      return search && title && title.toLowerCase().includes(search);
    });
    console.log(result);
    setResult(Filresult);
  };

  return (
    <>
      <section className="text-center">
        <div className="p-16">
          <img
            className="rounded-full h-24 w-24 mx-auto mb-4"
            src="/src/assets/logo.jpg"
            alt="logo"
          />
          <h1 className="font-rob font-bold text-5xl">NotesClub</h1>
          <h5 className="text-xl m-3">A Study Material Sharing Platform</h5>
        </div>
        <div>
          <input
            className="border-2 border-black rounded-md w-2/5 h-12 p-4"
            type="text"
            placeholder="Search Subject..."
            value={search}
            onChange={handleChange}
          />
          <SearchResultList result={result} />
        </div>
      </section>
    </>
  );
};

export default Body;
