import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Front/Header";
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
  };
  useEffect(() => {
    loadData();
  }, [name]);
  return (
    <div>
      <Link to={"/Contribute"}>Contribute</Link>
      <div className="flex">
        {notesData.map((note) => {
          return (
            <div key={note._id} className="h-2/6 w-2/5">
              <h2>Title {note.title}</h2>
              <p>Description {note.description}</p>
              <p>Uploaded On {note.date.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
