const enhancer = require("./enhancer.js");
// test away!
// test("repairs item to 100 durability", () => {
//   expect(repair(55).durability.toEqual(100));
// });
test("repairs item to 100 durability", () => {
  expect(enhancer.repair(55).durability).toBe(100);
});
