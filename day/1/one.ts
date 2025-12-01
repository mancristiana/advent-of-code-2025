import { readFile } from "node:fs/promises";

const readLines = async () => {
  const inputPath = new URL("./input.txt", import.meta.url);
  const input = await readFile(inputPath, { encoding: "utf8" });
  return input.split("\n");
};

const run = async () => {
  const lines = await readLines();
  let position = 50;
  let counter = 0;

  for (const line of lines) {
    const rotation = line[0];
    const distance = Number(line.slice(1)) % 100;

    position =
      rotation === "L"
        ? (position - distance + 100) % 100
        : (position + distance) % 100;

    if (position === 0) counter++;
  }

  console.log(counter);
};

run();
