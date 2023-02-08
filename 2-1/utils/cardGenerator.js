const cardGenerator = ({ id, email, first_name, last_name, avatar }) => {
  return `
        <div class="col-12 col-md-6 col-lg-4 my-2 p-5">
            <div class="card shadow rounded-4">
                <img src="${avatar}" class="card-img-top rounded-5" alt="${id}" style="height: 24rem;">
                <div class="card-body">
                    <h5 class="card-title">${first_name} ${last_name}</h5>
                    ${generateProfileInformation({
                      id,
                      email,
                      first_name,
                      last_name,
                      avatar,
                    })}
                    <button
                        onclick="handleOnClickProfileBtn(${id})" 
                        class="btn btn-primary rounded-3 w-100"
                        data-bs-toggle="modal" data-bs-target="#userProfileModal"
                    >
                        Profile
                    </button>
                </div>
            </div>
        </div>
    `;
};
