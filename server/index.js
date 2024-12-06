import express from 'express';
const app = express();
import route from "./router/venderRoute.js"
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

import cors from "cors";
import bodyParser from 'body-parser';
app.use(cors());
app.use(bodyParser.json());


import mongoose from "mongoose";
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error(err));

  app.use("/api",route);