import PropTypes from 'prop-types';

import {
  Span,
  Button,
  ContactItems,
  ContainerItems,
} from './ContactList.styled';

function ContactList({ contacts, onRemove }) {
  return (
    <ContainerItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItems key={id} name={name} number={number}>
          <Span>{name}: </Span>
          <Span>{number} </Span>
          <Button type="button" onClick={() => onRemove(id)}>
            {' '}
            Delete contact
          </Button>
        </ContactItems>
      ))}
    </ContainerItems>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func,
};

// class ContactList extends Component{
//     state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
//     }

//     render() {

//         return (
//             <ul>
//                 {this.state.contacts.map(({ id, name, number, onRemove }) => (
//                     <li key={id} name={name} number={number}>
//                     <span>{name} </span>
//                         <span>{number} </span>
//                         <button type="button" value={id} onClick={onRemove} > Delete contact</button>
//                     </li>
//                ))}
//             </ul>
//         )
//     }
// }
