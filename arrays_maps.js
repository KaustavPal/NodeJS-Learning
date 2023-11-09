const fruits = ["apple", "oranges", " ", "mango", " ", "lemon"];
console.log(
  fruits.map((fruit) => {
    return fruit === " " ? "empty string" : fruit;
  })
);
