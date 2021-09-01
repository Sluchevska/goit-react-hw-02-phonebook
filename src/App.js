import Form from './components/phonebook/Form';

import './App.css';
import React from 'react';
const { v4: uuidv4 } = require('uuid');

class App extends React.Component{
  state = {
  contacts: [],
  //   name: '',
  // number: '',
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
         <Form onSubmit={this.addContact}
         />
         
    </div>
  );
  }

}


export default App;
