// this is another bug fix
import later from "@breejs/later";
export const jobs = [
  {
    name: "scheduled-unlock",
    interval: later.parse.text("at 8:00 am on mon, tue, wed, thu, fri"),
  },
  {
    name: "scheduled-lock",
    interval: later.parse.text("at 5:00 pm on mon, tue, wed, thu, fri"),
  },
];
