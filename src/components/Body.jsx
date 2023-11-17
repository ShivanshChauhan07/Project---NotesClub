import React, { useEffect, useState } from "react";
import Data from "../assets/Data";
import { SearchResultList } from "./SearchResultList";

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
          <img src="" alt="logo" />
          <h1 className="font-rob font-bold text-3xl">NotesClub</h1>
          <h5>A Study Material Sharing Platform</h5>
        </div>
        <div>
          <input
            className="border-2 border-black rounded-md w-2/5 h-12 p-4"
            type="text"
            placeholder="Search Subject..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <SearchResultList result={result} />
      </section>
    </>
  );
};

export default Body;
