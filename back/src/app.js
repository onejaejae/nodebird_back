import express from "express";
import dotenv from "dotenv";
import postRoute from "./routes/postRoute";

dotenv.config();
const app = express();

app.use("/post", postRoute);

if (process.env.NODE_ENV === "development") {
  app.listen(process.env.PORT_DEV, () => {
    console.log(`Server is Running on ${process.env.PORT_DEV}`);
  });
} else {
  app.listen(process.env.PORT_PRO, () => {
    console.log(`Server is Running on ${process.env.PORT_PRO}`);
  });
}