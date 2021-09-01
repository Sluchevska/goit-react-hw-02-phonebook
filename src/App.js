import Form from './components/phonebook/Form';
import './App.css';
import React from 'react';

class App extends React.Component{
  // state = {
  // contacts: [],
  //   name: '',
  // number: '',
  // }

  addContact = data => {
    console.log(data)
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
