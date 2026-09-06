import test from "node:test";
import assert from "node:assert/strict";
import { calculateScrollPercentage, getNewScrollMilestones } from "./scroll-depth.mjs";

test("calculateScrollPercentage returns 0 when page cannot be scrolled", () => {
  assert.equal(calculateScrollPercentage(0, 1000, 1000), 0);
  assert.equal(calculateScrollPercentage(100, 800, 1000), 0);
});

test("calculateScrollPercentage calculates percentages correctly", () => {
  // Total scrollable: 2000 - 1000 = 1000
  assert.equal(calculateScrollPercentage(500, 2000, 1000), 50);
  assert.equal(calculateScrollPercentage(750, 2000, 1000), 75);
  assert.equal(calculateScrollPercentage(1000, 2000, 1000), 100);
});

test("getNewScrollMilestones returns 50 when crossing 50%", () => {
  const triggered = new Set();
  const milestones = getNewScrollMilestones(52, triggered);
  assert.deepEqual(milestones, [50]);
});

test("getNewScrollMilestones does not re-trigger already triggered milestones", () => {
  const triggered = new Set([50]);
  const milestones = getNewScrollMilestones(75, triggered);
  assert.deepEqual(milestones, [75]);
});

test("getNewScrollMilestones triggers 100% when reaching 98%+", () => {
  const triggered = new Set([50, 75]);
  const milestones = getNewScrollMilestones(99, triggered);
  assert.deepEqual(milestones, [100]);
});
