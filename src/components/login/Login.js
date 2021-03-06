import React, { Component } from 'react';
import { login } from '../services/firebaseConfig';
import { Link, Redirect } from 'react-router-dom';
import styles from './Login.css';


export class Login extends Component {

  state = {
    email: null,
    password: null,
    wasLoginSuccessful: false,
    isLoginErrVisible: false,
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleLogin = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    login(email, password);
    try {
      const authResult = await login(email, password);
      if(authResult.user.uid) {
        this.setState({ wasLoginSuccessful: true });
      }
    } catch(error) {
      this.setState({ isLoginErrVisible: true });
      console.log('no user', error);
    }
  }

  render() {
    if(this.state.wasLoginSuccessful){
      return <Redirect to="/success"/>;

    }
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
          <button type="submit">login</button>
          <button><Link to="/signup">signup</Link></button>
          <article className="error">
            {this.state.isLoginErrVisible && (
              <p>Email or password is incorrect</p> 
            )}
          </article>
        </form>
      </section>
    );
  }
}

export default Login;
