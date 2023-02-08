async function updateUser() {
  updatedUser = {
    id: +$("#modal").children()[0].children[1].value,
    email: $("#modal").children()[1].children[1].value,
    first_name: $("#modal").children()[2].children[1].value,
    last_name: $("#modal").children()[3].children[1].value,
    avatar: $("#modal").children()[4].children[1].value,
  };
  //validate updatedUser
  let errorMessage = await validator(updatedUser, "update");
  if (!!errorMessage) {
    alert(errorMessage);
    return;
  }
  //validate
  let users = [];
  let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
  let dataPageOne = await responsePageOne.text();
  let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
  let dataPageTwo = await responsePageTwo.text();
  users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
  let newUserData = [...users];
  let indexOfUser = users.findIndex((user) => user.id == updatedUser.id);
  newUserData[indexOfUser] = updatedUser;
  users = newUserData;
  $(".card").html(`<div class="banner">
        <img src="${updatedUser.avatar}" alt="${updatedUser.id}">
      </div>
      <h2 class="name">${updatedUser.first_name} ${updatedUser.last_name}</h2>
      <ul class="list-group">
        <li class="list-group-item">UID: ${updatedUser.id}</li>
        <li class="list-group-item">Email: ${updatedUser.email}</li>
      </ul>
      <a class="h4 text-center mt-4 text-decoration-none text-primary" href="../index.html">Back</a>
      <a class="h4 text-center mt-2 mb-3 text-decoration-none text-primary" onclick="renderModal(${updatedUser.id})">Update</a>`);

  $(".modal-wrapper").css("display", "none");
}
