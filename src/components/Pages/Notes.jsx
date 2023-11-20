import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Front/Header";
import Cards from "./Cards";
import Shimmer from "../Front/Shimmer";
export const Notes = () => {
  const { name } = useParams();
  const [notesData, setNotesData] = useState([]);
  const loadData = async () => {
    let response = await fetch(
      `http://localhost:5000/api/query?search=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    setNotesData(response);
    console.log(notesData);
  };
  useEffect(() => {
    loadData();
  }, [name]);
  return notesData.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <Header />
      <button className="border-2 border-slate-100 p-3 bg-green-500 text-white rounded-md">
        Contribute
      </button>
      <div className=" flex flex-wrap justify-evenly gap-5 content-evenly my-10 ">
        {notesData.map((note, index) => {
          return (
            index > 1 && (
              <Cards key={note.documents__data__document_id} note={note} />
            )
          );
        })}
      </div>
    </div>
  );
};
