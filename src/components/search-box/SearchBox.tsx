import { ChangeEventHandler, Component } from 'react';
import './SearchBox.css';

type SearchBoxProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  searchValue: string;
  className: string;
  placeholder?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const { onChange, searchValue, className, placeholder } = props;

  return (
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChange}
      value={searchValue}
    ></input>
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onChange, searchValue, placeholder, className } = this.props;

//     return (
//       <input
//         className={`${styles['search-box']} ${className}`}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChange}
//         value={searchValue}
//       ></input>
//     );
//   }
// }

export default SearchBox;
