import PropTypes from 'prop-types';
import {FriendsListItem} from '../FriendsListItem/FriendsListItem'
import css from './FriendsList.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((friends) => (
        <FriendsListItem key={friends.id} 
        friends={friends}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
