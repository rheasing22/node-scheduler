import { scheduledJobs } from "node-schedule";

function deleteTrigger() {
  regex = new RegExp(`^trigger`);
  const keys = Object.keys(scheduledJobs).filter((key) => regex.test(key));
  keys.forEach((key) => {
    scheduledJobs[key].cancel();
  });
}
