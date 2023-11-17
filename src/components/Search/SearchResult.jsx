import React from "react";
import { Link } from "react-router-dom";

export const SearchResult = ({ title }) => {
  return (
    <Link to={"notes/" + title} className="text-xl w-auto px-4 py-2">
      {title}
    </Link>
  );
};
