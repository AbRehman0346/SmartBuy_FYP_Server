import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import ProductRouter from "./routes/product_routes.js";
import user_router from "./routes/user.js";
import authRouter from "./routes/auth.js";

const app = express();

const remoteConnection =
  "mongodb+srv://fyp:20F-04@cluster0.agwij.mongodb.net/?retryWrites=true&w=majority";
const localConnection = "mongodb://127.0.0.1:27017/admin";

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(localConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log("Connection Failed");
  });

app.use("/products", ProductRouter);
app.use("/user", user_router);
app.use("/auth", authRouter);

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  res.send(`<h1>Server is Running. </h1>`);
});

app.listen(PORT, (data) => {
  console.log(`App is running on port ${PORT}`);
});
