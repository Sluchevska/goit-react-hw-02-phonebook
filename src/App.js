import React from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import './App.css';

const { v4: uuidv4 } = require('uuid');

class App extends React.Component{
  state = {
    contacts: [ ],
    
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
    deleteContact = e => {
        const contactId = e.currentTarget.value
 
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
