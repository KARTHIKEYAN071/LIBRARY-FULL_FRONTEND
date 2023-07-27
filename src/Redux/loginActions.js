export const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });