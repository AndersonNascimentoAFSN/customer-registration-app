import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ClientsRegistered extends Component {
  renderClients = (clients) => {
     return clients.map(({name, email, age}) => (
       <tr>
         <td>{name}</td>
         <td>{email}</td>
         <td>{age}</td>
       </tr>
     ))
  }
  
  render() {
    const { registeredClients } = this.props;
    return (
      <div>
        <h1>Clientes Cadastrados</h1>
        { registeredClients.length === 0 ? <p>Nenhum cliente cadastrado</p> 
          : <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Idade</th>
                </tr>
              </thead>

              <tbody> {this.renderClients(registeredClients)} </tbody>
            </table>  
        }

        <Link to="/cadastro" >Cadastrar Cliente</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  registeredClients: state.clientReducer,
});

export default connect(mapStateToProps)(ClientsRegistered);
