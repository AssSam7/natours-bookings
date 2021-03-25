// Basic Imports
const express = require("express");
const morgan = require("morgan");

// Custom Module Imports
const tourRouter = require("./router/tourRoutes");
const userRouter = require("./router/userRoutes");

// Using the Express and workaround for getting data to req object
const app = express();

// 1) Middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Creating our own middleware
app.use((req, res, next) => {
  console.log("Hello from the Middleware");
  next();
});

// 2) Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
