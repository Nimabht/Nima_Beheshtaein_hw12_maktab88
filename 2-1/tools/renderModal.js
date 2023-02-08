//modal render function
async function renderModal(id) {
  let users = [];
  let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
  let dataPageOne = await responsePageOne.text();
  let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
  let dataPageTwo = await responsePageTwo.text();
  users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
  let status;
  if (!id) {
    status = "create";
    selectedUser = {
      id: "",
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    };
  } else {
    status = "update";
    selectedUser = users.filter((user) => user.id === id)[0];
  }
  $(".modal-wrapper").html(`<form id="modal">
        <div class="form-group">
          <label for="uid">UID:</label>
          <input type="text" class="form-control" name="uid"  ${
            status === "update" ? "disabled" : "enabled"
          } value="${selectedUser.id}"/>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" name="email" value="${
            selectedUser.email
          }"/>
        </div>
        <div class="form-group">
          <label for="firstname">Firstname:</label>
          <input type="text" class="form-control" name="firstname" value="${
            selectedUser.first_name
          }"/>
        </div>
        <div class="form-group">
          <label for="lastname">Lastname</label>
          <input type="text" class="form-control" name="lastname" value="${
            selectedUser.last_name
          }"/>
        </div>
        <div class="form-group">
          <label for="avatar">Avatar link:</label>
          <input type="text" class="form-control" name="avatar" value="${
            selectedUser.avatar
          }"/>
        </div>
        <div class="button-wrapper">
          <button
            id="add-btn"
            type="button"
            class="btn btn-success"
            onclick="addNewUser()"
            style="display: ${status === "create" ? "inline-block" : "none"}"
          >
            Add
          </button>
          <button
            id="update-btn"
            type="button"
            class="btn btn-success"
            onclick="updateUser()"
            style="display: ${status === "update" ? "inline-block" : "none"}"
          >
            Update
          </button>
          <button
            id="add-btn"
            type="button"
            class="btn btn-secondary"
            onclick="closeModal()"
          >
            Close
          </button>
        </div>
      </form>`);
  $(".modal-wrapper").css("display", "flex");
}
