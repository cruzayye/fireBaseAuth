import React, { Component } from 'react';
import styles from './SignUp.css';

export class SignUp extends Component {
  static propTypes = {

  }

  state = {
    name: null
    
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <section className={styles.SignUp}>
        <h2>Sign UP</h2>
        <form>
          <input type="name" name="name" onChange={this.handleChange} />
        </form>


      </section>
    );
  }
}

export default SignUp;
