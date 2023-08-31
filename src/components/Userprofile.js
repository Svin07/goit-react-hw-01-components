// import PropTypes from 'prop-types';

export default function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    
return (<div className="profile">
<div className="description">
  <img
    src={avatar}
    alt={username}
    className="avatar"
  />
  <p className="name">{username}</p>
  <p className="tag">{tag}</p>
  <p className="location">{location}</p>
</div>

<ul className="stats">
  <li>
    <span className="label">Followers</span>
    <span className="quantity">{followers}</span>
  </li>
  <li>
    <span className="label">Views</span>
    <span className="quantity">{views}</span>
  </li>
  <li>
    <span className="label">Likes</span>
    <span className="quantity">{likes}</span>
  </li>
</ul>
</div>)


}

// Profile.PropTypes = {
//     username: PropTypes.string,
//     views: PropTypes.number,
//     likes: PropTypes.number,
//     followers: PropTypes.number,
//     stats: PropTypes.shape({}),
//     avatar: PropTypes.string,
//     location: PropTypes.string,
//     tag: PropTypes.string,
// };

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