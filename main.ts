import Bree from "bree";
import { jobs } from "./jobs/index.ts";

console.log(Deno.env.get("TEST"));

const bree = new Bree({
  defaultExtension: "ts",
  jobs,
});

await bree.start();
