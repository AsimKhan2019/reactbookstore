import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import bookStore from './redux/configureStore';
import { fetchBooks } from './redux/books/books';

const root = ReactDOM.createRoot(document.getElementById('root'));

bookStore.dispatch(fetchBooks());

root.render(
  <BrowserRouter>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);
