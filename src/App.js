import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'
import './App.css';

const { v4: uuidv4 } = require('uuid');

class App extends React.Component{
  state = {
  contacts: [],
  
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

 

  render() {
     return (
       <div>
         <h1>Phonebook</h1>
         <ContactForm onSubmit={this.addContact}/>
         <h2>Contacts</h2>
  {/* <Filter />
  <ContactList/> */}
    </div>
  );
  }

}


export default App;
