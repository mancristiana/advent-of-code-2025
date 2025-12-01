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
    const direction = line[0];
    const steps = Number(line.slice(1));

    for (let i = 0; i < steps; i++) {
      if (direction === "L") {
        position = position === 0 ? 99 : position - 1;
      } else {
        position = position === 99 ? 0 : position + 1;
      }

      if (position === 0) counter++;
    }
  }

  console.log(counter);
};

run();
