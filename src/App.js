import logo from './logo.svg';
import Input from './components/phonebook/Input';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
  contacts: [],
  name: ''
  }

  handleInputChange(e) {
 this.setState({inputValue:e.currentTarget.value})
}

  render() {
     return (
    <div>
         <Input
           type="text"
           name={this.state.name}
           onChange={this.handleInputChange} />
    </div>
  );
  }

}


export default App;
