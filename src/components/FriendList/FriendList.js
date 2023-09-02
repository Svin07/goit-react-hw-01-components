import PropTypes from 'prop-types';
import css from './FriendList.module.css'

import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({friends}) {

    return (
        <ul className={css.friendlist}>

           {friends.map(friend => (
                <FriendListItem key={friend.id}
                avatar={friend.avatar}
                friendName={friend.name}
                isOnline={friend.isOnline}
                ></FriendListItem>
         
  
           ))
        }
</ul>
    )
  }

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),).isRequired,
  }

//   {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },