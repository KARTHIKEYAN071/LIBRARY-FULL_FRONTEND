const initialState = {
    user: null,
    loading: false,
    error: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loading: false,
          user: action.payload,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  