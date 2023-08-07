import axios from 'axios';

export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get('your_api_url_here');
    const books = response.data;
    dispatch(fetchBooksSuccess(books));
  } catch (error) {
    // Handle error
  }
};
