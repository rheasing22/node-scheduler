import express from "express";
import schedule from "node-schedule";
//import "./dbConnect.js";

//const date = new Date("Mon Sep 20 2021 17:40:43 GMT+0530");

//array of dates

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// let job = schedule.scheduleJob(date, function () {
//   console.log("hi prash");
// });

//function to convert

function convertDateToUTC(dates) {
  dates = dates.map((ele) => new Date(ele));
  return dates;
}

function cancelDate(job) {
  console.log(`we are cancelling job ${job.name}`);
  job.cancel();
}

//array of jobs

//function that takes an array of dates and schedules them

// function scheduleDates(dates) {
//   let jobs = [];
//   for (let i = 0; i < dates.length; i++) {
//     let job = schedule.scheduleJob(dates[i], function () {
//       console.log("hi prash");
//     });

//     jobs.push(job);
//     return jobs;
//   }
// }

function nodescheduler(date) {
  let job = schedule.scheduleJob(date, function () {
    console.log("hi prash");
  });
  return job;
}

function scheduleDates(dates) {
  let jobs = [];
  for (let i = 0; i < dates.length; i++) {
    jobs.push(nodescheduler(dates[i]));
  }
  console.log(jobs);

  return jobs;
}

let dates = [
  "Mon Sep 20 2021 19:32:40 GMT+0530",
  "Mon Sep 20 2021 19:32:53 GMT+0530",
  "Mon Sep 20 2021 19:32:57 GMT+0530",
  "Mon Sep 20 2021 19:33:00 GMT+0530",
  "Mon Sep 20 2021 19:33:03 GMT+0530",
];
console.log(dates);
dates = convertDateToUTC(dates);
let jobs = scheduleDates(dates);

//cancel job
console.log(jobs[0]);

cancelDate(jobs[0]);

//console.log(schedule.scheduledJobs);

app.listen(port, () => {
  console.log(`Listening on port ...${port}`);
});
