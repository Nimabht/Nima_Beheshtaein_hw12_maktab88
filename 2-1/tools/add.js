async function addNewUser() {
  let newUser = {
    id: +modal.children[0].children[1].value,
    email: modal.children[1].children[1].value,
    first_name: modal.children[2].children[1].value,
    last_name: modal.children[3].children[1].value,
    avatar: modal.children[4].children[1].value,
  };
  let errorMessage = await validator(newUser, "create");
  if (!!errorMessage) {
    alert(errorMessage);
    return;
  }
  let users = [];
  let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
  let dataPageOne = await responsePageOne.text();
  let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
  let dataPageTwo = await responsePageTwo.text();
  users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
  users.push(newUser);
  renderUsersList(pagination(users, 1, 6));
  $(".modal-wrapper").css("display", "none");
}
