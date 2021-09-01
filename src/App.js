import logo from './logo.svg';
// import Input from './components/phonebook/Input';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
  contacts: [],
  name: ''
  }

  handleNameChange=e=> {
 this.setState({name:e.currentTarget.value})
}

  render() {
     return (
       <div>
         <form>
           <label>
             Name
<input
           type="text"
           value={this.state.name}
            onChange={this.handleNameChange} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required/>
           </label>
         </form>
         
    </div>
  );
  }

}


export default App;
