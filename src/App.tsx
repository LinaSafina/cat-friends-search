import { ChangeEvent, Component, useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import { getData } from './utils/data.utils';

export type Monster = {
  name: string;
  id: string;
  email: string;
};

const App = () => {
  console.log('render');
  const [searchValue, setSearchValue] = useState('');
  const [users, setUsers] = useState<Monster[]>([]);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().match(searchValue)
  );

  useEffect(() => {
    const fetchData = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(users);
    };

    fetchData();
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, [setUsers]);

  return (
    <div className='App'>
      <h1 className='title app__title'>Наши друзья</h1>
      <SearchBox
        onChange={inputChangeHandler}
        searchValue={searchValue}
        placeholder='Поиск пользователей'
        className='users-search-box'
      />
      <CardList users={filteredUsers} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { users: [], search: '' };
//   }

//   inputChangeHandler = (event) => {
//     this.setState({ search: event.target.value.toLowerCase() });
//   };

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState({ users: users }));
//   }

//   render() {
//     const { users, search } = this.state;
//     const { inputChangeHandler } = this;

//     const filteredUsers = users.filter((user) =>
//       user.name.toLowerCase().match(search)
//     );

//     return (
//       <div className='App'>
//         <h1 className='title app__title'>Наши друзья</h1>
//         <SearchBox
//           onChange={inputChangeHandler}
//           searchValue={search}
//           placeholder='Поиск пользователей'
//           className='users-search-box'
//         />
//         <CardList users={filteredUsers} />
//       </div>
//     );
//   }
// }

export default App;
