const pagination = (users, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return users.slice(startIndex, startIndex + pageSize);
};
