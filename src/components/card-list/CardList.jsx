import React, { Component } from 'react';
import Card from '../card/Card';
import styles from './CardList.module.css';

const CardList = ({ users }) => {
  return (
    <ul className={styles['users__list']}>
      {users.map((user) => {
        const { name, id, email } = user;

        return <Card key={id} user={{ email, name, id }} />;
      })}
    </ul>
  );
};

// class CardList extends Component {
//   render() {
//     const { users } = this.props;

//     return (
//       <ul className={styles['users__list']}>
//         {users.map((user) => {
//           const { name, id, email } = user;

//           return <Card user={{ email, name, id }} />;
//         })}
//       </ul>
//     );
//   }
// }

export default CardList;
