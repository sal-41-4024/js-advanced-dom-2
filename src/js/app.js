// TODO: write code here

import { GridWidgit } from "./grid-widget/grid-widget";

document.addEventListener("DOMContentLoaded", () => {
  const grid = new GridWidgit(document.querySelector(".grid"));
  const newInterval = setInterval(() => {
    grid.changeActiveCell();
  }, 1000);
});

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");
