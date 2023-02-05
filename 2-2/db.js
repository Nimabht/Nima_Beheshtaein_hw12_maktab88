const pFs = require("./promisifiedFs");
const _ = require("lodash");
const path = "./user-data.json";

const readAll = async () => {
  pFs
    .promisifiedReadFile(path, "utf8")
    .then((res) => {
      console.log(JSON.parse(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

const create = async (data) => {
  pFs
    .promisifiedReadFile(path, "utf8")
    .then((res) => {
      const prevJson = JSON.parse(res);
      if (_.findIndex(prevJson, (user) => user.uid == data.uid) !== -1) {
        console.log("User already exists!");
        return;
      }
      const newJson = [...prevJson, data];
      pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const read = async (id) => {
  pFs
    .promisifiedReadFile(path, "utf8")
    .then((res) => {
      const selectedUser = JSON.parse(res).filter((user) => user.uid === id)[0];
      if (selectedUser) {
        console.log(selectedUser);
      } else {
        console.log("User not found!");
      }
    })
    .catch((err) => {
      throw err;
    });
};

const update = async (id, data) => {
  if (data.uid !== id) {
    console.log("Invalid use of update method");
    return;
  }
  pFs
    .promisifiedReadFile(path, "utf8")
    .then((res) => {
      const prevJson = JSON.parse(res);
      const newJson = _.map(prevJson, (user) => {
        if (user.uid === id) {
          console.log("User updated!");
          return data;
        }
        return user;
      });
      pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
    })
    .catch((err) => {
      console.log(err);
    });
};

const remove = async (id) => {
  pFs
    .promisifiedReadFile(path, "utf8")
    .then((res) => {
      const prevJson = JSON.parse(res);
      const newJson = prevJson.filter((user) => user.uid !== id);
      if (prevJson.length === newJson.length) {
        console.log("User not found!");
        return;
      }
      pFs.promisifiedWriteFile(path, JSON.stringify(newJson, null, 4));
      console.log("User removed!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  readAll,
  create,
  read,
  update,
  remove,
};
