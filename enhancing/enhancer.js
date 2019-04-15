module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  let newItem = {
    name: item.name,
    enhancement:
      item.enhancement === 20 ? item.enhancement : item.enhancement + 1,
    durability: item.durability
  };
  return newItem;
}
function fail(item) {
  let newItem = {
    name: item.name,
    enhancement:
      item.enhancement > 16 ? item.enhancement - 1 : item.enhancement,
    durability:
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10
  };
  return newItem;
}

function repair(item) {
  let newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
  return newItem;
}

function get(item) {
  let newItem = {
    name:
      item.enhancement === 0 ? item.name : `[+${item.enhancement}]` + item.name,
    enhancement: item.enhancement,
    durability: item.durability
  };
  return newItem;
}
