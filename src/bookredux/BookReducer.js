const initialState = {
    books: [],
  };
  
  const BookReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BOOK":
        return { books: [...state.books, action.payload] };
      default:
        return state;
    }
  };
  
  export default BookReducer;
  