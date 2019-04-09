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
    enhancement: item.enhancement,
    durability: item.durability - 5
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
  return { ...item };
}
