const pFs = require("./promisifiedFs");
const _ = require("lodash");
const path = "./user-data.json";

const readAll = async () => {
  const result = await pFs.promisifiedReadFile(path, "utf8");
  console.log(JSON.parse(result));
};

const create = async (data) => {
  const result = await pFs.promisifiedReadFile(path, "utf8");
  const prevJson = JSON.parse(result);
  if (_.findIndex(prevJson, (user) => user.uid == data.uid) !== -1) {
    console.log("User already exists!");
    return;
  }
  const newJson = [...prevJson, data];
  await pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
  console.log(data);
};

const read = async (id) => {
  const users = await pFs.promisifiedReadFile(path, "utf8");
  const selectedUser = JSON.parse(users).filter((user) => user.uid === id)[0];
  if (selectedUser) {
    console.log(selectedUser);
  } else {
    console.log("User not found!");
  }
};

const update = async (id, data) => {
  if (data.uid !== id) {
    console.log("Invalid use of update method");
    return;
  }
  const users = await pFs.promisifiedReadFile(path, "utf8");
  const prevJson = JSON.parse(users);
  const newJson = _.map(prevJson, (user) => {
    if (user.uid === id) {
      console.log("User updated!");
      return data;
    }
    return user;
  });
  await pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
};

const remove = async (id) => {
  const users = await pFs.promisifiedReadFile(path, "utf8");
  const prevJson = JSON.parse(users);
  const newJson = prevJson.filter((user) => user.uid !== id);
  if (prevJson.length === newJson.length) {
    console.log("User not found!");
    return;
  }
  await pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
  console.log("User removed!");
};

module.exports = {
  readAll,
  create,
  read,
  update,
  remove,
};
