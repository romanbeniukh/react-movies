import React, { Component } from 'react';
import T from 'prop-types';
import { validateAll } from 'indicative/validator';
import Input from '../Input/Input';

const rules = {
  name: 'required|string|min:2',
  phone: 'required|string|min:13',
};

const errorMessages = {
  'name.required': 'Поле "Имя" обязательно для заполнения',
  'name.min': 'Введите минимум 2 буквы',
  'phone.required': 'Поле "Телефон" обязательно для заполнения',
  'phone.min': 'Введите телефон в формате "0999999999"',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: T.func.isRequired,
  };

  state = {
    name: '',
    phone: '',
    errors: {},
  };

  handleChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    let replaceValue = value;

    if (name === 'phone') {
      replaceValue = value.replace(/[^\d]/g, '');
      const regex = /^([^\s]{3})([^\s]{3})([^\s]{2})([^\s]{2})$/g;
      const match = regex.exec(replaceValue);

      if (match) {
        match.shift();
        replaceValue = match.join('-');
      }
    }

    this.setState({
      [name]: replaceValue,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, phone } = this.state;

    validateAll({ name, phone }, rules, errorMessages)
      .then(res => {
        this.props.addContact(res);
        this.resetForm();
      })
      .catch(err => {
        const formErrors = {};

        err.forEach(error => {
          formErrors[error.field] = error.message;
        });

        this.setState({
          errors: formErrors,
        });
      });
  };

  resetForm = () => {
    this.setState({
      name: '',
      phone: '',
      errors: {},
    });
  };

  render() {
    const { name, phone, errors } = this.state;
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <Input
          name="name"
          value={name}
          handleChange={this.handleChange}
          placeholder="Имя"
          maxLength={20}
          type="text"
          label="Имя"
          autocomplete="off"
          errorMessage={errors}
        />
        <Input
          name="phone"
          value={phone}
          handleChange={this.handleChange}
          placeholder="Телефон"
          maxLength={10}
          type="text"
          label="Телефон"
          autocomplete="off"
          errorMessage={errors}
        />
        <button className="contact-form__btn" onSubmit={this.handleSubmit} type="submit">
          Добавить контакт
        </button>
      </form>
    );
  }
}

export default ContactForm;
