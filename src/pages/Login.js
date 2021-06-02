import React, { Component } from 'react'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  };

  handleClick = () => {
    const { email, password } = this.state;
    const { history } = this.props;
    const auth = {
      email: 'user@email.com',
      password: '123456',
    };
    if (email === auth.email && password === auth.password) {
      history.push('/clientes-cadastrados');
    }
  }

  render() {
    const { email, password } = this.state;
    console.log(this.props);
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">E-mail:
          <input type="email" name="email" value={ email }
            onChange={ ({target}) => this.setState({ email: target.value })} />
        </label>
        <label htmlFor="password">Senha:
          <input type="password" name="password" value={ password }
            onChange={ ({target}) => this.setState({ password: target.value })} />
        </label>
        <button type="button" onClick={ this.handleClick }>Login</button>
      </div>
    )
  }
}

