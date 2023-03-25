const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150", "corolla", "camero"]];

// Help with inference when extracting values
const c = carMakers[0];
const myCar = carMakers.pop();

// Const prevent incompatible values
carMakers.push("100"); // 100

// Help with 'map'
carMakers.map((car: string): string => {
  return c.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "20130-10-10"];
importantDates.push(new Date());
importantDates.push("2020-02-02");
