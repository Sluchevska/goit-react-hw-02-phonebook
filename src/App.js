import React from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

const { v4: uuidv4 } = require('uuid');

class App extends React.Component{
  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    
    filter: ''
  
  }

  
      addContact = (name, number) => {
     const Contacts = {
      id: uuidv4(),
      name,
      number

     }
    
    this.setState(prevState => ({
  contacts:[Contacts, ...prevState.contacts]
}))

   }
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase()
  
    return contacts.filter(contact =>
        
      contact.name.toLowerCase().includes(normalizedFilter))
 
  }
    deleteContact = contactId => {
       
 
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  }
  
  

  render() {
     const { filter } = this.state;
  
     return (
       <div>
         <h1>Phonebook</h1>
         <ContactForm onSubmit={this.addContact}/>
         <h2>Contacts</h2>
         <Filter value={filter} onChange={this.changeFilter} />
         <ContactList contacts={this.getVisibleContacts()} onRemove={ this.deleteContact}/>
    </div>
  );
  }

}


export default App;
