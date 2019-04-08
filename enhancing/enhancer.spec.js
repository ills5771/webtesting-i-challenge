const enhancer = require("./enhancer.js");
// test away!
// test("repairs item to 100 durability", () => {
//   expect(repair(55).durability.toEqual(100));
// });
test("repairs item to 100 durability", () => {
  expect(enhancer.repair(55).durability).toBe(100);
});

it("increase enhancement by 1", () => {
  expect(
    enhancer.succeed({
      enhancement: 10,
      durability: 100
    })
  ).toEqual({
    enhancement: 11,
    durability: 100
  });
});
// test("decrease durability by 5 if enhancement is less than 15", () => {
//   expect(
//     enhancer.fail({
//       enhancement: 14,
//       durability: 100
//     })
//   ).toEqual({
//     enhancement: 14,
//     durability: 95
//   });
// });
