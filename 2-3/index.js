const fs = require("fs/promises");
const namesPath = "./names.txt";
const numbersPath = "./numbers.txt";

const generateText = (users) => {
  let result = [];
  users.map((user) => {
    if (user.numbers.length === 0) {
      result.push(`${user.name} hasn't any phone number.`);
    }
    if (user.numbers.length === 1) {
      result.push(`${user.name}'s phone number is ${user.numbers[0]}`);
    }
    if (user.numbers.length > 1) {
      result.push(`${user.name}'s phone numbers are ${user.numbers.join()}`);
    }
  });
  return result.join("\n");
};

function main() {
  let users = [];
  fs.readFile(namesPath, "utf8")
    .then((data) => {
      data.split("\r\n").forEach((user) => {
        let temp = user.split("-");
        users.push({ id: temp[0], name: temp[1], numbers: [] });
      });
      fs.readFile(numbersPath, "utf8")
        .then((data) => {
          data.split("\r\n").forEach((number) => {
            let temp = number.split("-");
            let indexOfUser = users.findIndex((user) => user.id === temp[0]);
            if (indexOfUser > -1) users[indexOfUser].numbers.push(temp[1]);
          });
          console.log(users);
          fs.writeFile("./result.txt", generateText(users));
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
