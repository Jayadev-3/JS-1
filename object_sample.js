var Person = {
  name: "Jayadev",
  age: 20,
  place: "Kayamkulam",
  display: function () {
    console.log(this.place);
  },
};
console.log(Person.name);
for (x in Person) {
  console.log(x);
}
console.log(Person.display());
Person.dob = "18-06-2022";
console.log(Person);
