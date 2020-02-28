import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const login = (event) => {
    event.preventDefault();
    axiosWithAuth().post('/api/login', credentials)
      .then(response => {
        window.localStorage.setItem('token', response.data.payload);
        props.history.push('/api/colors');
        console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            id="username"
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
            id="password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
