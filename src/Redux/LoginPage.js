import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './loginActions';

const LoginPage = ({ loading, error, loginRequest }) => {
  const handleLogin = () => {
    // Perform login logic here
    loginRequest();
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = {
  loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
