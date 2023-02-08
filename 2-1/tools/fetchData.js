async function fetchData() {
  let responsePageOne = await fetch("https://reqres.in/api/users?page=1");
  let dataPageOne = await responsePageOne.text();
  let responsePageTwo = await fetch("https://reqres.in/api/users?page=2");
  let dataPageTwo = await responsePageTwo.text();
  users.push(...JSON.parse(dataPageOne).data, ...JSON.parse(dataPageTwo).data);
}
