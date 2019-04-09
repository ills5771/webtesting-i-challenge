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
      enhancement: 20,
      durability: 100
    })
  ).toEqual({
    enhancement: 20,
    durability: 100
  });
});
test("decrease durability by 5 if enhancement is less than 15", () => {
  expect(
    enhancer.fail({
      enhancement: 14,
      durability: 100
    })
  ).toEqual({
    enhancement: 14,
    durability: 95
  });
});
test("decrease durability by 10 if enhancement greater than 15", () => {
  expect(
    enhancer.fail({
      enhancement: 16,
      durability: 100
    })
  ).toEqual({
    enhancement: 16,
    durability: 90
  });
});

test("decrease enhancement by 1 if enhancement is greater than 16, durability decreased by 10 since enhancement is greater than 15", () => {
  expect(
    enhancer.fail({
      enhancement: 18,
      durability: 100
    })
  ).toEqual({
    enhancement: 17,
    durability: 90
  });
});
