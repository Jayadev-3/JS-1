function longTask(millisecondsTime) {
  dt = new Date();
  while (new Date() - dt <= millisecondsTime) {}
}

function showEnd() {
  console.log("End");
}

console.log("Started");
setTimeout(showEnd, 2000);

console.log("Started");
setTimeout(showEnd, 2000);

console.log("Started");
setTimeout(showEnd, 2000);
