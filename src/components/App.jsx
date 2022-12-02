import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Component } from 'react';

import DataInput from './DataInput';
import DataList from './DataList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmitForm = data => {
    const contact = { id: nanoid(), name: data.name, number: data.number };
    this.setState(({ contacts }) => ({
      contacts: [contact, contacts],
    }))
  };

  getContacts = () => {
    const { contacts } = this.state;
    return contacts;    
  }

  render() {
    const totalContacts = this.state.contacts.length;
    const visibleContacts = this.getContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <DataInput onSubmit={this.handleSubmitForm} />
        <h2>Contacts</h2>
        {!totalContacts ? (
          <p>Your phonebook is empty. Add a new contact</p>
        ) : (
          <DataList contacts={visibleContacts} />
        )}
        <GlobalStyle />
      </>
    );
  }
}

export default App;
