export default class BookAPI {
  static fetchBooks = () => {
    const bookArr = [];
    const bookAPIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6uWSL6iY8g6twl0BiCaq/books';
    return fetch(bookAPIURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        Object.keys(json).forEach((bookId) => {
          bookArr.push({
            id: bookId,
            title: json[bookId][0].title,
            author: json[bookId][0].author,
          });
        });
        return bookArr;
      });
    // .then((books) => {
    //   console.log('Fetched books inside: ', books.length);
    //   return books;
    // });
    // console.log('Fetched books: ', bookArr.length);
    // return bookArr;
  };

  static deleteBook = async (bookId) => {
    const bookAPIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6uWSL6iY8g6twl0BiCaq/books/';
    await fetch(bookAPIURL + bookId, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static addBook = async ({
    id, title, author, category,
  }) => {
    const bookAPIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/6uWSL6iY8g6twl0BiCaq/books';
    await fetch(bookAPIURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
}
