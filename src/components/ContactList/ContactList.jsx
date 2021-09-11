import React from 'react';
import PropTypes from "prop-types";
import { List, Item} from "../ContactList/ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id} >
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>Удалить</button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;