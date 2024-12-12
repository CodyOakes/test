// <https://nodejs.org/api/worker_threads.html>
import { parentPort, workerData } from "node:worker_threads";
import process from "node:process";
import { isHdmHoliday } from "../utils/isHdmHoliday.ts";

const holiday = isHdmHoliday();

if (holiday) {
  console.log("Today is a holiday");
} else {
  const now = new Date();
  console.log(
    "Unlock Doors",
    now.toLocaleDateString(),
    now.toLocaleTimeString()
  );
  console.log(workerData);
}

if (parentPort) parentPort.postMessage("done");
else process.exit(0);
