import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './contactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <div>
        <ul className={css.list}>
          {this.props.contacts.map(({ name, number }, index) => (
            <li className={css.item} key={index}>
              <span>{name}</span>
              <span>{number}</span>
              <button
                className={css.deleteBtn}
                onClick={() => this.props.deleteContact(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
