import React, { useState } from "react";
import { Form } from "react-router-dom";
import Data from "../../assets/Data";

export const Contribute = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    branch: "",
    subject: "",
  });
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      </form>
    </div>
  );
};
