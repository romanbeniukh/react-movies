import React from 'react';
import T from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, removeContact }) => (
  <ul className="contact-list">
    {contacts.map(contact => (
      <li className="contact-list__item contact-item" key={contact.id}>
        <ContactItem removeContact={() => removeContact(contact.id)} contact={contact} />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: T.arrayOf(T.shape({ id: T.string.isRequired })).isRequired,
  removeContact: T.func.isRequired,
};

export default ContactList;
