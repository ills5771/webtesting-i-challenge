module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let newItem = {
    name: item.name,
    enhancement: item.enhancement + 1,
    durability: item.durability
  };
  return newItem;
}

// function fail(item) {
//   let { enhancement, durability } = item;
//   if (enhancement < 15) {
//     durability - 5;
//   }

//   return { ...item };

// if (enhancement > 15) {
//   durability - 10;
// }
// if (enhancement > 16) {
//   enhancement - 1;
// }

function repair(item) {
  let newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
  return newItem;
}

function get(item) {
  return { ...item };
}
