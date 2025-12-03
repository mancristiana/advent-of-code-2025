import { count } from "node:console";
import { readFile } from "node:fs/promises";

const readRanges = async () => {
  const inputPath = new URL("./input.txt", import.meta.url);
  const input = await readFile(inputPath, { encoding: "utf8" });
  return input.split(",");
};

const makeInvalidId = (half: number | string) => Number(`${half}${half}`);

const firstInvalidIdHalf = (low: string) =>
  low.length % 2 === 0
    ? Number(low.slice(0, low.length / 2))
    : Math.pow(10, (low.length - 1) / 2);

const countNumbersInRange = (low: string, high: string) => {
  const highNumber = Number(high);

  let sum = 0;
  let invalidIdHalf = firstInvalidIdHalf(low);

  while (makeInvalidId(invalidIdHalf) < Number(low)) {
    invalidIdHalf++;
  }

  while (makeInvalidId(invalidIdHalf) <= highNumber) {
    sum += makeInvalidId(invalidIdHalf);
    invalidIdHalf++;
  }
  return sum;
};

const run = async () => {
  const ranges = await readRanges();
  let sum = 0;

  for (const range of ranges) {
    const [low, high] = range.split("-");
    sum += countNumbersInRange(low, high);
  }
  console.log(sum);
};

run();
