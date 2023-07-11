import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './contactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
export class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { value, name } = e.target;
    this.setState(prevSatte => ({ ...prevSatte, [name]: value }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    return (
      <div>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.nameLabel} htmlFor={'name'}>
            Name
          </label>
          <input
            className={css.input}
            id={'name'}
            type="text"
            name="name"
            pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label className={css.numberLabel} htmlFor={'number'}>
            Number
          </label>
          <input
            className={css.input}
            id={'number'}
            type="tel"
            name="number"
            pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
          <button className={css.btn}>Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
