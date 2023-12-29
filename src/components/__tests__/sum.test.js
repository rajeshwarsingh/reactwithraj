import sum from "../sum.js"
test("sum function should calcualte the sum of two numbers",()=>{
  const result = sum(3,5);
  expect(result).toBe(8)
})