import { scheduleJob, scheduledJobs } from "node-schedule";
import duedateRescheduler from "./duedateRescheduler.js";

function duedateScheduler(duedate, notificationtype, id) {
  let job = scheduleJob(
    `trigger-notification-duedate:${id}`,
    duedate,
    function () {
      if (notificationtype === "email") {
        console.log("sending email");
      } else if (notificationtype === "sms") {
        console.log(`sending sms ${id}`);
      } else {
        console.log("sending sms and email");
      }
    }
  );
  console.log(job);
  return job;
}

console.log(
  "here",
  duedateScheduler(
    "Tue Sep 21 2021 13:42:33 GMT+0530",
    "sms",
    "6141f7a19edb4febfe085283"
  )
);

console.log(
  "here 2",
  duedateScheduler(
    "Tue Sep 21 2021 13:42:38 GMT+0530",
    "sms",
    "6141f7a19edb4febfe085289"
  )
);

duedateRescheduler(
  "Tue Sep 21 2021 13:42:48 GMT+0530",
  "6141f7a19edb4febfe085283"
);
console.log("the jobs are :", scheduledJobs);
