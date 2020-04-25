import React from 'react';
import T from 'prop-types';

const ContactItem = ({ contact, removeContact }) => (
  <>
    <div className="contact-item__wrap">
      <span className="contact-item__name">{contact.name}</span>
      <span className="contact-item__phone">{contact.phone}</span>
    </div>
    <button className="contact-item__btn" onClick={removeContact} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
      </svg>
    </button>
  </>
);

ContactItem.propTypes = {
  contact: T.shape({
    name: T.string.isRequired,
    phone: T.string.isRequired,
  }).isRequired,
  removeContact: T.func.isRequired,
};

export default ContactItem;