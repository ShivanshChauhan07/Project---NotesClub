import React, { useState } from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ result, search }) => {
  const [title, setTitle] = useState("");

  return search !== "" ? (
    <div className="h-[150px] w-2/5 mx-auto absolute left-[455px] overflow-auto">
      <ul>
        {result.map((title, index) => {
          return (
            <li
              className="border-[1px] rounded-sm border-slate-800 text-left p-1 px-3 hover:cursor-pointer"
              key={index}
              onClick={() => {
                setTitle(title);
              }}
            >
              <SearchResult url={title} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : null;
};
