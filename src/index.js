import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';

ReactDOM.render(
  <Provider store={store}>
    <BookList />
  </Provider>,
  document.getElementById('root')
);

