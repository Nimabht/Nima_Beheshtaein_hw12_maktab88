//DOM part

const usersListContainer = document.getElementById("usersList");
const userProfileModalTitle = document.getElementById("userProfileModalTitle");
const userProfileModalBody = document.getElementById("userProfileModalBody");
const userProfileModalFooter = document.getElementById("userProfileModalFooter");

//Pagination and search handler (jQuery)
$(async () => {
  let users = [];
  let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
  let dataPageOne = await responsePageOne.text();
  let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
  let dataPageTwo = await responsePageTwo.text();
  users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
  $(".pagination-nav").append(generatePagination(users.length, 6));
  renderUsersList(pagination(users, 1, 6));
  $(".page-item").on("click", function () {
    $(".page-item").not($(this)).attr("class", "page-item");
    $(this).attr("class", "page-item active");
    let pageNumber = $(this).children("a").html();
    renderUsersList(pagination(users, pageNumber, 6));
  });
  $(".form-inline").submit(function (e) {
    e.preventDefault();
  });
  $("#search-inp").on("keyup", function () {
    const searchValue = $(this).val().toUpperCase();
    let filteredUsers = users.filter((user) => {
      let userValues = Object.values(user);
      for (const value of userValues) {
        if (String(value).toUpperCase().indexOf(searchValue) > -1) {
          return true;
        }
      }
      return false;
    });
    filteredUsers.length > 0
      ? renderUsersList(pagination(filteredUsers, 1, 6))
      : renderUsersList(pagination(users, 1, 6));
  });
});
//render user list for first time
