const generatePagination = (numberOfItems, pageSize) => {
  let list = $('<ul class="pagination"></ul>');
  list.append($(`<li class="page-item active"><a href="#" class="page-link">1</a></li>`));
  for (let i = 1; i < numberOfItems / pageSize; i++) {
    list.append(
      $(`<li class="page-item"><a href="#" class="page-link">${i + 1}</a></li>`)
    );
  }
  return list;
};
