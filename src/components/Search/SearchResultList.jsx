import React from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ result }) => {
  // console.log(result);
  return (
    <div className="flex justify-center">
      {result.map((title, index) => {
        return (
          <div key={index} className=" flex flex-col w-2/5 h-52 text-left ">
            {<SearchResult title={title} />}
          </div>
        );
      })}
    </div>
  );
};
