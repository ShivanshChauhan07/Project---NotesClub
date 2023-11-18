import React, { useState } from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ result, search }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");

  return search !== "" ? (
    <div className="h-16 w-2/5 mx-auto">
      <ul>
        {result.map((title, index) => {
          return (
            <li
              className="border-[1px] rounded-sm border-slate-800 text-left p-1 px-3 hover:cursor-pointer"
              key={index}
              onClick={() => {
                setVisible(true);
                setTitle(title);
              }}
            >
              {title}
            </li>
          );
        })}
      </ul>
      {visible && <SearchResult url={title} />}
    </div>
  ) : null;
};
