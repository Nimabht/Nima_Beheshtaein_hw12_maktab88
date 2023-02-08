const generateProfileInformation = ({ id, email, first_name, last_name }) => {
  return `
    <ul class="list-group list-group-flush my-4">
        <li class="list-group-item">${first_name} ${last_name} is Maktab 45 user by UID of ${id}, You can easily get in touch with George from
        ${email}</li>
        <li class="list-group-item">uid: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
    </ul>
    `;
};
