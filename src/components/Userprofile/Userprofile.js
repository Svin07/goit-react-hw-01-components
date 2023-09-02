import PropTypes from 'prop-types';
import css from './Userprofile.module.css'

export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    
return (<div className="profile">
<div className={css.description}>
  <img
    src={avatar}
    alt={username}
    className={css.avatar}
  />
  <p className={css.name}>{username}</p>
  <p className={css.tag}>{tag}</p>
  <p className={css.location}>{location}</p>
</div>

<ul className={css.stats}>
  <li className={css.statsitems}>
    <span className={css.label}>Followers</span>
    <span className={css.quantity}>{followers}</span>
  </li>
  <li className={css.statsitems}>
    <span className={css.label}>Views</span>
    <span className={css.quantity}>{views}</span>
  </li>
  <li className={css.statsitems}>
    <span className={css.label}>Likes</span>
    <span className={css.quantity}>{likes}</span>
  </li>
</ul>
</div>)


}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    stats: PropTypes.shape({}).isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
};

// "username": "Jacques Gluke",
// "tag": "jgluke",
// "location": "Ocho Rios, Jamaica",
// "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
// "stats": {
//   "followers": 5603,
//   "views": 4827,
//   "likes": 1308
// }

// { username, tag, location, avatar, stats: { followers, views, likes } }

    // views: PropTypes.number.isRequired,
    // likes: PropTypes.number.isRequired,
    // followers: PropTypes.number.isRequired,