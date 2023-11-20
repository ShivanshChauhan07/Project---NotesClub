import React, { useState } from "react";
import { Form, Link, json } from "react-router-dom";
import Data from "../../assets/Data";
import { createRef } from "react";
export const Contribute = () => {
  const fileInput = createRef();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    university: "",
    branch: "",
    subject: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);
    formData.set("uploadUser", JSON.stringify(userData));
    console.log(formData);
    try {
      const resposnse = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await resposnse.json();
      if (resposnse.ok) {
        alert("file uploaded");
      } else {
        console.log("some error occur");
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center">
      <form className="flex flex-col h-3/5 w-2/4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border"
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="border"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <select name="university" onChange={handleChange}>
          <option selected>Select University</option>
          <option value="ipu">ipu</option>
          <option value="aktu">aktu</option>
          <option value="igdtu">igdtu</option>
        </select>
        <select name="branch" onChange={handleChange}>
          <option selected>Select Branch</option>
          <option value="cs">cs</option>
          <option value="it">it</option>
          <option value="ece">ece</option>
          <option value="eee">eee</option>
        </select>
        <select name="subject" onChange={handleChange}>
          <option selected>Select Subject</option>
          {Data.map((single, id) => {
            return (
              <option key={id} value={single}>
                {single}
              </option>
            );
          })}
        </select>
        <input type="file" name="avatar" ref={fileInput} />
        <button>
          <Link to={"/"}>Cancel</Link>
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
