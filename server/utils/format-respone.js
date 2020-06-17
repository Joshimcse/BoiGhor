const format = {
  book: (data) => {
    let formatedBook = {};

    formatedBook._id = data._id;
    formatedBook.title = data.title;
    formatedBook.desc = data.desc;
    formatedBook.published = data.published;
    formatedBook.price = data.price;
    formatedBook.discount = data.discount;
    formatedBook.numOfPage = data.numOfPage;
    formatedBook.isbn = data.isbn;
    formatedBook.lang = data.lang;
    formatedBook.region = data.region;
    formatedBook.stock = data.stock;
    formatedBook.sold = data.sold;
    formatedBook.remark = data.remark;
    formatedBook.isPublished = data.isPublished;
    formatedBook.categories = data.categories.map(format.category);
    formatedBook.authors = data.authors.map(format.author);
    formatedBook.publisher = format.publisher(data.publisher);

    return formatedBook;
  },
  publisher: (data) => {
    let formatedPublisher = {};

    formatedPublisher._id = data._id;
    formatedPublisher.name = data.name;
    formatedPublisher.desc = data.desc;
    formatedPublisher.books = data.books;

    return formatedPublisher;
  },
  author: (data) => {
    let formatedAuthor = {};

    formatedAuthor._id = data._id;
    formatedAuthor.name = data.name;
    formatedAuthor.dateOfBirth = data.dateOfBirth;
    formatedAuthor.desc = data.desc;
    formatedAuthor.books = data.books;

    return formatedAuthor;
  },
  category: (data) => {
    let formatedCategory = {};

    formatedCategory._id = data._id;
    formatedCategory.title = data.title;
    formatedCategory.rank = data.rank;
    formatedCategory.isActive = data.isActive;

    return formatedCategory;
  }
};

module.exports = {
  format,
  formatedBook: format.book,
  formatedAuthor: format.publisher,
  formatedCategory: format.author,
  formatedPublisher: format.category
};
