const express = require("express");
const app = express();
const port = 5000;
const Mongodb = require("./utils/db");
Mongodb();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.use("/api/notes", require("./Routes/NewNotes"));
app.use("/api/createuser", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/SearchData"));
app.use("/api/upload", require("./Routes/Upload"));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
