const usersListGenerator = (users) => {
  let usersListBody = "";
  for (const user of users) {
    usersListBody += cardGenerator(user);
  }
  return usersListBody;
};
