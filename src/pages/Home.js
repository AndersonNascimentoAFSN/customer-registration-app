import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Cadastro de Clientes</h1>
        <Link to="/login"/>
      </div>
    )
  }
}
