import { scheduleJob, scheduledJobs } from "node-schedule";
import remindersRescheduler from "./remindersRescheduler.js";
function remindersScheduler(reminders, notificationtype, id) {
  reminders.forEach((reminder, index) => {
    scheduleJob(
      `trigger-notification-reminder-${index}:${id}`,
      reminder,
      function () {
        if (notificationtype === "email") {
          console.log("sending email");
        } else if (notificationtype === "sms") {
          console.log(`sending sms ${id},${reminder}`);
        } else {
          console.log("sending sms and email");
        }
      }
    );
  });
}

let reminders = [
  "Tue Sep 21 2021 14:27:15 GMT+0530",
  "Tue Sep 21 2021 14:27:30 GMT+0530",
];
let reminders2 = [
  "Tue Sep 21 2021 14:27:05 GMT+0530",
  "Tue Sep 21 2021 14:27:10 GMT+0530",
];
remindersScheduler(reminders, "sms", "6141f7a19edb4febfe085283");

remindersScheduler(reminders2, "sms", "6141f7a19edb4febfe085289");

reminders = [
  "Tue Sep 21 2021 14:24:45 GMT+0530",
  "Tue Sep 21 2021 14:24:50 GMT+0530",
];
remindersRescheduler(reminders, "6141f7a19edb4febfe085283");
console.log(scheduledJobs);
