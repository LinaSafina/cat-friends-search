import Card from '../card/Card';
import './CardList.css';

import { Monster } from '../../App';

type CardListProps = {
  users: Monster[];
};

const CardList = ({ users }: CardListProps) => {
  return (
    <ul className='users__list'>
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
