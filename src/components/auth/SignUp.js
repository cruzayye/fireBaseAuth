import React, { Component } from 'react';
import styles from './SignUp.css';
import { register } from '../services/firebaseConfig';

export class SignUp extends Component {
  state = {
    name: null,
    lastName: null,
    email: null,
    password: null,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSignUp = event => {
    event.preventDefault();
    const { name, lastName, email, password } = this.state;
    const user = { email, password, name, lastName };
    register(user);
  }

  render() {
    return (
      <section className={styles.SignUp}>
        <h2>Sign UP</h2>
        <form onSubmit={this.handleSignUp}>
          <label htmlFor="firstName">First Name</label>
          <input 
            id="firstName" 
            type="name" 
            name="name" 
            onChange={this.handleChange} />
          <label htmlFor="lastName">Last Name</label>
          <input 
            id="lastName" 
            type="name" 
            name="lastName" 
            onChange={this.handleChange} />
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
    );
  }
}

export default SignUp;
