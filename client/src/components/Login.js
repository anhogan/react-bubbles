import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = (event) => {
    event.preventDefault();
    setIsLoading(true);
    axiosWithAuth.post('/api/login', credentials)
      .then(response => {
        console.log(response);
        window.localStorage.setItem('token', response.data);
        props.history.push('/api/colors');
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const handleChange = (event) => {
    setCredentials({
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
      </form>
    </>
  );
};

export default Login;
