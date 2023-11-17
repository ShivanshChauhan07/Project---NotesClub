import React from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ result }) => {
  // console.log(result);
  return (
    <div>
      {result.map((title, index) => {
        return <div key={index}>{<SearchResult title={title} />}</div>;
      })}
    </div>
  );
};
