import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './filterContact.module.css';

export class FilterContact extends Component {
  updateFilter = e => {
    this.props.onFilter(e.target.value);
  };

  render() {
    return (
      <div>
        <label className={css.filterLabel} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          type="text"
          value={this.props.filter}
          onChange={this.updateFilter}
          placeholder="Search contacts"
        />
      </div>
    );
  }
}
FilterContact.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
