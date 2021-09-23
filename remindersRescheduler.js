import { scheduledJobs } from "node-schedule";

function remindersRescheduler(reminders, userid, todoid) {
  //update user logic
  let regex = new RegExp(`trigger-notification-reminder-(.*):(${id}$)`);
  const keys = Object.keys(scheduledJobs).filter((key) => regex.test(key));
  console.log("the keys are", keys);
  for (let i = 0; i < reminders.length; i++) {
    let key = keys[i];
    console.log("the current key is", key);
    scheduledJobs[key].reschedule(reminders[i]);
  }
}

export default remindersRescheduler;
