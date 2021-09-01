import logo from './logo.svg';
import Input from './components/phonebook/Input';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
  contacts: [],
  name: ''
  }
  render() {
     return (
    <div>
<Input/>
    </div>
  );
  }

}


export default App;
