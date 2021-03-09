import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== password2) {
      setError('Passwords do not match!');
    }
    const userData = { email, password };

    fetch('http://localhost:4000/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        return setError(response.statusText);
      })
      .then((data) => {
        setEmail('');
        setPassword('');
        setPassword2('');
        console.log(data);
        props.setToken(data.token);
        localStorage.setItem('token', data.token);
        if (props.loginModalShow) {
          props.loginModalShow(false);
        }
        history.push('/pets');
      })
      .catch((err) => setError(err));
  }

  return (
    <div className='newbooking-form'>
      <h2 className='text-center'>Login</h2>
      {error && <h2>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Ex: jdoe@gmail.com'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='name'>Confirm Password </label>
          <input
            type='password'
            id='password2'
            name='password2'
            value={password2}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </div>
        <div className='text-center'>
          <button
            id='booking-button'
            type='submit'
            className='bg-blue-600 rounded text-white'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
