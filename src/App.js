import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = { users: [], search: '' };
  }

  inputChangeHandler = (event) => {
    this.setState({ search: event.target.value.toLowerCase() });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    const { users, search } = this.state;
    const { inputChangeHandler } = this;

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().match(search)
    );

    return (
      <div className='App'>
        <h1 className='title app__title'>Наши друзья</h1>
        <SearchBox
          onChange={inputChangeHandler}
          searchValue={search}
          placeholder='Поиск пользователей'
          className='users-search-box'
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
