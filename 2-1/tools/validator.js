function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}
function containsOnlyLettersAndSpace(str) {
  return /^[a-zA-Z\s]*$/.test(str);
}
function isValidEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
function isValidUrl(url) {
  return /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
    url
  );
}
function containsOnlySpace(str) {
  let noSpace = String(str).replace(/ /g, "");
  return noSpace.length === 0;
}

//function that checks if there is any empty input and also check duplicate id
async function validator(user, type) {
  //check if user is not an object
  if (typeof user !== "object" || Array.isArray(user) || user === null)
    return "Invalid input";

  for (const key in user) {
    if (user[key] == "" || containsOnlySpace(user[key])) {
      return "Please Fill all the inputs!!!";
    }
  }

  if (type === "create") {
    let users = [];
    let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
    let dataPageOne = await responsePageOne.text();
    let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
    let dataPageTwo = await responsePageTwo.text();
    users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
    if (!containsOnlyNumbers(user.id)) return "Id must be numeric";
    if (users.find((person) => person.id == user.id)) {
      return "Choose another id :)";
    }
  }

  if (!isValidEmail(user.email)) return "Invalid Email";
  if (!containsOnlyLettersAndSpace(user.first_name))
    return "firstname cannot contains number";
  if (!containsOnlyLettersAndSpace(user.last_name))
    return "lastname cannot contains number";
  if (!isValidUrl(user.avatar)) return "Invalid avatar URL";
}
