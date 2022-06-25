function longTask(millisecondsTime) {
  dt = new Date();
  while (new Date() - dt <= millisecondsTime) {}
}

console.log("Started");
longTask(4000);
console.log("End");

console.log("Started");
longTask(4000);
console.log("End");
