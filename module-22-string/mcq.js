function person(name, age) {
  // console.log("My name is " + name);
  let personName = "My name is " + name + " & I'm " + age + " years old.";
  return personName;
}
let values = ("Jasim", 27);
let searchName = person(values);
console.log(searchName);