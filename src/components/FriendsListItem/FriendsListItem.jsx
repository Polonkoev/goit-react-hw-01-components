import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />

      <span className={css.name}>
        <p className={isOnline ? `${css.online}` : `${css.offline}`}>{name}</p>
      </span>
    </li>
  );
};

FriendsListItem.propTypes = {
  friends: PropTypes.object,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
