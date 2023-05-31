import express from "express";
import mongoose from "mongoose";
const app = express();

//routers
import authRouter from "./routes/authRoutes.js";
import itemsRoutes from "./routes/itemsRoutes.js";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandler.js";
import notFoundMiddleware from "./middleware/notFound.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/items", itemsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// app.use("/api/v1/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/inventory");
    app.listen(4700, () => {
      console.log("server listening");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
