const { Component } = require('react');
const { v4: uuidv4 } = require('uuid');

// function ContactList({ contacts }) {
//     return (
//        <ul>
//           {contacts.map(({ id, name, number }) => (
//                   <li key={id} name={name} number={number} />
//                ))}
//             </ul> 
//     )
// }
//  
class ContactList extends Component{
    state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
    }
    
//     addContact = ({id,name, number}) => {
//      const Contacts = {
//       id,
//       name,
//       number

//     }
//     this.setState(prevState => ({
//   contacts:[Contacts, ...prevState.contacts]
// }))

//     }
    render() {
  
        return (
            <ul>
                {this.state.contacts.map(({ id, name, number }) => (
                    <li key={id} name={name} number={number}>
                    <span>{name} </span>
                    <span>{number}</span>
                    </li>
               ))}
            </ul>
        )
    }
}

export default ContactList