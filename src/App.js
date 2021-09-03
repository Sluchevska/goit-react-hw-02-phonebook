import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter'
import './App.css';



class App extends React.Component{
  state = {
    contacts: [],
    filter: ''
  
  }

 
 

  render() {
     return (
       <div>
         <h1>Phonebook</h1>
         <ContactForm onSubmit={this.addContact}/>
         <h2>Contacts </h2>
  {/* <Filter /> */}
  <ContactList/> 
    </div>
  );
  }

}


export default App;
