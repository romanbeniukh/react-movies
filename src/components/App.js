import React, { Component } from 'react';
import shortId from 'shortid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Section from './Section/Section';
import CustomAlert from './Alert/CustomAlert';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Артур Пирожков', phone: '093-117-78-99' },
      { id: 'id-2', name: 'Артемий Лебедев', phone: '096-547-32-65' },
      { id: 'id-3', name: 'Вадим Макеев', phone: '050-453-54-65' },
    ],
    filter: '',
    isAlert: false,
    alertMessage: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = ({ name, phone }) => {
    const contact = {
      id: shortId.generate(),
      name,
      phone,
    };

    const uniqueName = this.state.contacts.some(
      contactName => contactName.name.toLowerCase() === contact.name.toLowerCase(),
    );

    if (uniqueName) {
      this.setState({
        isAlert: true,
        alertMessage: `${name} уже есть в списке контактов!`,
      });

      setTimeout(() => this.closeAlert(), 3000);
    } else {
      this.setState(state => ({
        contacts: state.contacts.concat(contact),
      }));
    }
  };

  removeContact = id => {
    const filteredContacts = this.filterContact();

    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));

    if (filteredContacts.length === 1) {
      this.resetFilter();
    }
  };

  closeAlert = () => {
    this.setState({
      isAlert: false,
      alertMessage: '',
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  resetFilter = () => {
    this.setState({
      filter: '',
    });
  };

  filterContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  };

  render() {
    const { contacts, filter, isAlert, alertMessage } = this.state;
    const visibleContacts = this.filterContact();

    return (
      <div className="page-container">
        <Section title="Форма контактов">
          <ContactForm addContact={this.addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Контакты">
            {contacts.length > 2 && <ContactFilter changeFilter={this.changeFilter} value={filter} />}
            <ContactList contacts={visibleContacts} removeContact={this.removeContact} />
          </Section>
        )}
        <CustomAlert closeAlert={this.closeAlert} isAlert={isAlert} message={alertMessage} />
      </div>
    );
  }
}

export default App;
