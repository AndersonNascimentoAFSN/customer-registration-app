import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../redux/actions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: '',
    };
  };

  handleOnChange = ({ target: { name, value} }) => {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick = () => {
    const { registerUser } = this.props
    const { name, email, age } = this.state;
    const client = { name, email, age }
    registerUser(client);
  }

  render() {
    const { name, email, age } = this.state;
    return (
      <div>
        <h1>Cadastro</h1>

        <label htmlFor="name">Nome:
          <input type="text" name="name" value={ name }
            onChange={ this.handleOnChange } />
        </label>

        <label htmlFor="email">E-mail:
          <input type="email" name="email" value={ email }
            onChange={ this.handleOnChange } />
        </label>

        <label htmlFor="age">Idade:
          <input type="number" name="age" value={ age }
            onChange={ this.handleOnChange } />
        </label>

        <button type="button" onClick={ this.handleOnClick }>Cadastrar</button>

        <Link to="/clientes-cadastrados">Clientes Cadastrados</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (client) => { dispatch(register(client)) }
})

export default connect(null, mapDispatchToProps)(Register)