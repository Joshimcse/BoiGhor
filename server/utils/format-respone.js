const format = {
  book: (data) => {
    let {
      _id,
      title,
      desc,
      published,
      price,
      discount,
      numOfPage,
      isbn,
      region,
      stock,
      sold,
      remark,
      isPublished,
      categories,
      authors,
      publisher
    } = data;

    return {
      _id,
      title,
      desc,
      published,
      price,
      discount,
      numOfPage,
      isbn,
      region,
      stock,
      sold,
      remark,
      isPublished,
      categories: categories.map(format.category),
      authors: authors.map(format.author),
      publisher: format.publisher(publisher)
    };
  },
  publisher: (data) => {
    let { _id, name, desc, books } = data;
    return { _id, name, desc, books };
  },
  author: (data) => {
    let { _id, name, dateOfBirth, desc, books } = data;
    return { _id, name, dateOfBirth, desc, books };
  },
  category: (data) => {
    let { _id, title, rank, isActive } = data;
    return { _id, title, rank, isActive  };
  }
};

module.exports = {
  format,
  formatedBook: format.book,
  formatedAuthor: format.publisher,
  formatedCategory: format.author,
  formatedPublisher: format.category
};
