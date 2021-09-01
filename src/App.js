import logo from './logo.svg';
// import Input from './components/phonebook/Input';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
  contacts: [],
    name: '',
  number: '',
  }

  handleChange=e=> {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
     
 })
}

  render() {
     return (
       <div>
         <form>
           <label>
             Name
             <input
              type="text"
              name="name"
               value={this.state.name}
               onChange={this.handleChange} 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required/>
           </label>
           <label>
             Number
             <input
               type="tel"
               name="number"
               value={this.state.number}
               onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
             />
             
           </label>
         </form>
         
    </div>
  );
  }

}


export default App;
