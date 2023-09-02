import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'

export default function FriendListItem({ isOnline, avatar, friendName }) {

    return (
        
        (<li  className={css.item}>
        <span className={ isOnline ? `${css.coloronn}` : `${css.coloroff}`}></span>
        <img className={css.avatar} src={avatar} alt={friendName} width="48" />
        <p className={css.name}>{friendName}</p>
      </li>)
    )}

    FriendListItem.propTypes = {
        
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        friendName: PropTypes.string.isRequired,
    }