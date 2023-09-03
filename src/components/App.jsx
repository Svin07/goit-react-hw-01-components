import Profile from './Userprofile/Userprofile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import Transaction from './TransactionHistory/TransactionHistory';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={title} stats={data} />

      <FriendList friends={friends} />

      <Transaction items={transactions} />
    </div>
  );
};
