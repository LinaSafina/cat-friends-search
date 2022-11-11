import React, { Component } from 'react';
import styles from './Card.module.css';

class Card extends Component {
  render() {
    const { name, id, email } = this.props.user;

    return (
      <li className={styles['users__list-item']} key={id}>
        <img
          className={styles['users__img']}
          alt={`пользователь ${name}`}
          src={`https://robohash.org/${id}.png?set=set4&size=150x150`}
        ></img>
        <h2 className={styles['users__name']}>{name}</h2>
        <p className={styles['users__text']}>{email}</p>
      </li>
    );
  }
}

export default Card;
