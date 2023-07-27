import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import{BrowserRouter} from 'react-router-dom'
// import MyApp from './App';
import Routing from './Route';
// import SignUp from './SignUp';
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import BookReducer from './bookredux/BookReducer';
// import bookReducer from "./bookReducer";
import reportWebVitals from './reportWebVitals';
import MyApp from './App';
import SignUp from './SignUp';
import { Provider } from 'react-redux';
import reducer from './Reducer';
// import SignUp from './SignUp';
// const store = createStore(reducer);
const store = createStore(BookReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider>
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
      {/* <SignUp/> */}
    </BrowserRouter>
    </Provider>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
//   import React from 'react';
//   import { Provider } from 'react-redux';
//   import store from './Redux/store';
//   import LoginPage from './Redux/LoginPage';
  
//   const App = () => {
//     return (
//       <Provider store={store}>
//       <LoginPage />
//     </Provider>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>

//   );