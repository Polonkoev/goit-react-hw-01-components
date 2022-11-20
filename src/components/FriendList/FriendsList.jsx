import PropTypes from 'prop-types';
import css from './FriendsList.module.css'
export const FriendsList = ({friends}) => {
    return(
<ul className={css.list}>
{friends.map(({avatar, name, isOnline, id}) =>( 
    <li key={id} className={css.item}>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <span className="status">{isOnline ? <p className={`${css.name} ${css.online}`}>{name}</p> : <p className={`${css.name} ${css.offline}`}>{name}</p>}</span>
    
  </li>
))}
</ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };