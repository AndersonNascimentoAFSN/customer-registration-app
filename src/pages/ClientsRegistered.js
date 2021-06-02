import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClientsRegistered extends Component {
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
    const clients = [ 
      // {
      //   name: 'user',
      //   email: 'user@email.com',
      //   age: 25,
      // },
      // {
      //   name: 'user2',
      //   email: 'user2@email.com',
      //   age: 30,
      // }
    ]
    return (
      <div>
        <h1>Clientes Cadastrados</h1>
        { clients.length === 0 ? <p>Nenhum cliente cadastrado</p> 
          : <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Idade</th>
                </tr>
              </thead>

              <tbody> {this.renderClients(clients)} </tbody>
            </table>  
        }

        <Link to="/cadastro" >Cadastrar Cliente</Link>
      </div>
    )
  }
}
