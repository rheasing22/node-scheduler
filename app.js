import express from "express";
import schedule from "node-schedule";
//import "./dbConnect.js";

const date = new Date("Mon Sep 20 2021 05:02:23 GMT-0700");
console.log(date);
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

let job = schedule.scheduleJob(date, function () {
  console.log("The world is going to end today.");
});

console.log(job);

app.listen(port, () => {
  console.log(`Listening on port ...${port}`);
});
