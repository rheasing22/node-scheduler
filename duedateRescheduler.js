import { scheduledJobs } from "node-schedule";

function duedateRescheduler(duedate, id) {
  let regex = new RegExp(`trigger-notification-duedate:(${id}$)`);
  console.log("keys are", Object.keys(scheduledJobs));
  const key = Object.keys(scheduledJobs).filter((key) => regex.test(key));
  console.log("here are the ones for this id", key);
  console.log(scheduledJobs[key]);
  if (key) {
    scheduledJobs[key].reschedule(duedate);
  }
}

export default duedateRescheduler;
