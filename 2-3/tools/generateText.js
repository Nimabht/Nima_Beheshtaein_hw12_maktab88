module.exports.generateText = generateText = (users) => {
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
