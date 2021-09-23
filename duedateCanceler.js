//user todo is deleted or user is deleted

import { scheduledJobs } from "node-schedule";

function duedateCanceler(duedate, id) {
  let regex = new RegExp(`:(${id}$)`);
  const keys = Object.keys(scheduledJobs).filter((key) => regex.test(key));
  console.log("here are the ones for this id", keys);
  keys.forEach((key) => {
    scheduledJobs[key].cancel();
  });
}

export default duedateCanceler;
