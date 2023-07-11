import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm.jsx/ContactForm';
import { ContactList } from 'components/ContactList.jsx/ContactList';
import { FilterContact } from 'components/FilterContact.jsx/FilterContact';
import contacts from 'contacts.json';
import css from './addContacts.module.css';

export class AddContacts extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = newContact => {
    const id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id }],
    }));
  };
  deleteContact = id => {
    this.setState(prevState => {
      const updateContacts = [...prevState.contacts];
      updateContacts.splice(id, 1);
      return { contacts: updateContacts };
    });
  };
  filterContacts = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <div className={css.formContainer}>
          <h1 className={css.phoneBook}>PhoneBook</h1>
          <ContactForm addContact={this.addContact} />
        </div>
        <div className={css.contactContainer}>
          <h2 className={css.contacts}>Contacts</h2>
          <FilterContact
            filter={this.state.filter}
            onFilter={this.filterContacts}
          />
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
