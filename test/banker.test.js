import test from "node:test";
import assert from "node:assert/strict";
import { analyzeSafety, validateProblem } from "../public/banker.js";

test("finds the classic safe sequence", () => {
  const result = analyzeSafety({allocation:[[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]],maximum:[[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]],available:[3,3,2]});
  assert.equal(result.safe,true);
  assert.deepEqual(result.sequence,[1,3,4,0,2]);
});

test("reports an unsafe state when no process can proceed", () => {
  const result = analyzeSafety({allocation:[[1,0],[0,1]],maximum:[[2,0],[0,2]],available:[0,0]});
  assert.equal(result.safe,false);
  assert.deepEqual(result.unfinished,[0,1]);
});

test("rejects maximum demand below current allocation", () => {
  assert.throws(() => validateProblem({allocation:[[2]],maximum:[[1]],available:[0]}),/below allocation/);
});
