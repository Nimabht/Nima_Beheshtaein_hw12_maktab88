const fs = require("fs");
const { generateText } = require("./tools/generateText");
const namesPath = "./names.txt";
const numbersPath = "./numbers.txt";

async function main() {
  try {
    const users = [];
    const usersText = await fs.promises.readFile(namesPath, "utf8");
    const numbersText = await fs.promises.readFile(numbersPath, "utf8");
    usersText.split("\r\n").forEach((user) => {
      let temp = user.split("-");
      users.push({ id: +temp[0], name: temp[1], numbers: [] });
    });
    numbersText.split("\r\n").forEach((number) => {
      let temp = number.split("-");
      let indexOfUser = users.findIndex((user) => user.id == temp[0]);
      if (indexOfUser > -1) users[indexOfUser].numbers.push(temp[1]);
    });

    await fs.promises.writeFile("./result.txt", generateText(users));
    console.log("Done!");
  } catch (error) {
    console.log(error);
  }
}
main();
