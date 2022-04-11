import express from "express";
import data from "./data.js";
import data2 from "./data2.js";
import cors from "cors";
// import { createRequire } from "module";
//git add .
// masomsal
//git commit -am "make it better"
//git push heroku master
// const require = createRequire(import.meta.url);
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get("/api/", (req, res) => {
  res.send(data2);
});

app.get("/api/uniqueslots", (req, res) => {
  const categories = data.map((x) => x.SLOTID);
  let uniqueCategories = [...new Set(categories)];
  res.send(uniqueCategories);
});
