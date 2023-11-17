import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      {notesData.map((note) => {
        return (
          <div key={note._id} className="notes">
            <h2>{note.title}</h2>
            <p>{note.description}</p>
          </div>
        );
      })}
    </div>
  );
};
