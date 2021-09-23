import { scheduleJob, scheduledJobs } from "node-schedule";
let duedate = new Date("Tue Sep 21 2021 13:19:33 GMT+0530");

let job = scheduleJob(duedate, function () {
  console.log("hi prash");
});
console.log(job);
