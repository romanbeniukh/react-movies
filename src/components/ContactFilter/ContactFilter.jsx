import React from 'react';
import T from 'prop-types';
import Input from '../Input/Input';

const ContactFilter = ({ changeFilter, value }) => (
  <div className="contact-filter">
    <Input
      label="Поиск контакта"
      handleChange={changeFilter}
      value={value}
      maxLength={20}
      placeholder="Введите имя контакта..."
      type="text"
      autocomplete="off"
      name="search"
    />
  </div>
);

ContactFilter.propTypes = {
  changeFilter: T.func.isRequired,
  value: T.string.isRequired,
};

export default ContactFilter;
