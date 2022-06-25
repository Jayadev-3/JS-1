var hello = (data) => {
  console.log("Data : " + data);
};

var hey = (callback) => {
  callback("Jayadev");
};

hey(hello);
