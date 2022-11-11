import { Component } from 'react';
import styles from './SearchBox.module.css';

class SearchBox extends Component {
  render() {
    const { onChange, searchValue, placeholder, className } = this.props;

    return (
      <input
        className={`${styles['search-box']} ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChange}
        value={searchValue}
      ></input>
    );
  }
}

export default SearchBox;