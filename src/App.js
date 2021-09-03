import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'
import './App.css';



class App extends React.Component{
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  
  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
   addContact = (id,name, number) => {
     const Contacts = {
      id,
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
         {/* <Filter value={this.filter} onChange={this.changeFilter} /> */}
         <ContactList contacts={ this.contacts}/>
    </div>
  );
  }

}


export default App;
