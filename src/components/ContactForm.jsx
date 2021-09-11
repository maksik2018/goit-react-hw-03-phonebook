import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    const value = event.currentTarget.value;
    const name = event.currentTarget.name;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
         <input
          placeholder="indicate your name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.onChange}
        />
           <input
          placeholder="indicate your phone number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.onChange}
        />
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};
