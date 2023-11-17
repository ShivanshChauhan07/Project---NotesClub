import React from "react";
import { Link } from "react-router-dom";

export const SearchResult = ({ title }) => {
  const handleClick = () => {
    alert("Hello");
  };
  return <Link to={"notes/" + title}>{title}</Link>;
};
