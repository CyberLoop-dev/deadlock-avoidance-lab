import { analyzeSafety } from "./banker.js";
const sample = { allocation:[[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]], maximum:[[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]], available:[3,3,2] };
const input = document.querySelector("#problem");
const error = document.querySelector("#error");
const status = document.querySelector("#status");
const summary = document.querySelector("#summary");
const sequence = document.querySelector("#sequence");
const trace = document.querySelector("#trace");
document.querySelector("#example").addEventListener("click", () => { input.value = JSON.stringify(sample,null,2); error.textContent=""; });
document.querySelector("#run").addEventListener("click", () => {
  try {
    const result = analyzeSafety(JSON.parse(input.value));
    error.textContent = "";
    status.textContent = result.safe ? "SAFE STATE" : "UNSAFE STATE";
    status.className = "pill " + (result.safe ? "safe" : "unsafe");
    summary.textContent = result.safe
      ? `A safe order exists. All ${result.sequence.length} processes can finish.`
      : `No complete safe order was found. Processes still blocked: ${result.unfinished.map(p=>"P"+p).join(", ")}.`;
    sequence.replaceChildren(...result.sequence.map(p => { const el=document.createElement("span"); el.className="step"; el.textContent="P"+p; return el; }));
    trace.replaceChildren(...result.trace.map((item,i) => { const el=document.createElement("div"); el.className="trace-row"; el.textContent=`${i+1}. P${item.process} needs [${item.need.join(", ")}]; available [${item.before.join(", ")}] → [${item.after.join(", ")}]`; return el; }));
  } catch (err) { error.textContent = err.message; status.textContent="Invalid input"; status.className="pill unsafe"; }
});
input.value = JSON.stringify(sample,null,2);
document.querySelector("#run").click();
