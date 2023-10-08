const readline = require("readline");

const readl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");

readl.on("line", (input) => {
  if (input.toLowerCase() === "exit") {
    console.log("This important software is now closing");
    rl.close();
  } else {
    console.log(`Your name is: ${input}`);
  }
});

readl.on("close", () => {
  process.exit(0);
});
