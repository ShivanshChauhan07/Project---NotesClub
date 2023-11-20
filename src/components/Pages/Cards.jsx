import React from "react";

const Cards = ({ note }) => {
  console.log(note);
  return (
    <>
      <div className="rounded-sm h-96 w-[350px] cursor-pointer shadow-slate-500 shadow-sm transition-all hover:shadow-lg">
        <header>
          <h1 className="font-bold text-lg mx-2 p-1">
            {note.documents__data__category__document_category_name}
          </h1>
          <hr />
        </header>
        <div className="text-[0.9em]">
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Topic:</span>
            <span className="pr-4">{note.documents__data__document_title}</span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold ">Description:</span>
            <p className="pr-4 overflow-hidden text-ellipsis whitespace-nowrap w-48 text-right">
              {note.documents__data__document_description}
            </p>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Subject:</span>
            <span className="pr-4">
              {note.documents__data__subject__subject_name}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Univeristy:</span>
            <span className="pr-4">
              {
                note.documents__data__subject__course__university__university_abbreviation
              }
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Course:</span>
            <span className="pr-4">
              {note.documents__data__subject__course__course_abbreviation}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">File Size:</span>
            <span className="pr-4">
              {(note.documents__data__document_size / 1000000).toFixed(2)}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Contributor:</span>
            <span className="pr-4">
              {note.documents__data__document_contributor?.name}
            </span>
          </p>
          <p className="my-3 mx-2 flex justify-between">
            <span className="font-semibold">Uploaded on:</span>
            <span className="pr-4">june</span>
          </p>
        </div>
        <div className="flex justify-between mt-6 px-2">
          <p className="my-auto">100 Views</p>
          <button className="border-2 border-slate-100 p-2 bg-slate-900 text-white rounded-md">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
