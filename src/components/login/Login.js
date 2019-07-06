import React, { Component } from 'react';
import { login } from '../services/firebaseConfig';
import styles from './Login.css';


export class Login extends Component {

  state = {
    email: null,
    password: null,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value})
  }

  handleLogin = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    login(email, password)
    try {
      const authResult = await login(email, password);
      console.log(authResult)
    } catch (error) {
      console.log('no user', eror)
    }

  }

  render() {
    return (
      <section className={styles.Login}>
       <h2>Login</h2>
        <form onSubmit={this.handleLogin}>
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="name" 
            name="email" 
            onChange={this.handleChange} />
          <label htmlFor="email">Password</label>
          <input 
            id="passWord" 
            type="name" 
            name="password" 
            onChange={this.handleChange} />
          <button>submit</button>
        </form>
      </section>
    )
  }
}

export default Login
