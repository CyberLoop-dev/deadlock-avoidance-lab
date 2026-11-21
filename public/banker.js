export function validateProblem(problem) {
  const { allocation, maximum, available } = problem ?? {};
  if (!Array.isArray(allocation) || !Array.isArray(maximum) || !Array.isArray(available) || allocation.length === 0 || allocation.length !== maximum.length) {
    throw new Error("allocation and maximum must be non-empty matrices with the same number of processes; available must be a vector.");
  }
  const resources = available.length;
  if (!resources || allocation.some(row => !Array.isArray(row) || row.length !== resources) || maximum.some(row => !Array.isArray(row) || row.length !== resources)) {
    throw new Error("Every matrix row must have the same number of columns as the available vector.");
  }
  const valid = value => Number.isInteger(value) && value >= 0;
  if (!available.every(valid) || !allocation.flat().every(valid) || !maximum.flat().every(valid)) {
    throw new Error("Resource counts must be non-negative integers.");
  }
  for (let p = 0; p < allocation.length; p++) {
    for (let r = 0; r < resources; r++) {
      if (maximum[p][r] < allocation[p][r]) throw new Error(`Maximum demand is below allocation for P${p} resource ${r}.`);
    }
  }
  return { allocation, maximum, available };
}

export function analyzeSafety(input) {
  const { allocation, maximum, available } = validateProblem(input);
  const work = [...available];
  const finished = allocation.map(() => false);
  const need = allocation.map((row, p) => row.map((value, r) => maximum[p][r] - value));
  const sequence = [];
  const trace = [];
  let progressed = true;
  while (progressed) {
    progressed = false;
    for (let p = 0; p < allocation.length; p++) {
      if (finished[p] || !need[p].every((value, r) => value <= work[r])) continue;
      const before = [...work];
      for (let r = 0; r < work.length; r++) work[r] += allocation[p][r];
      finished[p] = true;
      sequence.push(p);
      trace.push({ process: p, need: [...need[p]], before, after: [...work] });
      progressed = true;
    }
  }
  return { safe: finished.every(Boolean), sequence, unfinished: finished.flatMap((done, p) => done ? [] : [p]), need, trace, finalAvailable: work };
}
