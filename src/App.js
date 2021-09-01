import logo from './logo.svg';
// import Input from './components/phonebook/Input';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
  contacts: [],
  name: ''
  }

  handleInputChange=e=> {
 this.setState({name:e.currentTarget.value})
}

  render() {
     return (
    <div>
         <input
           type="text"
           value={this.state.name}
           onChange={this.handleInputChange} />
    </div>
  );
  }

}


export default App;
