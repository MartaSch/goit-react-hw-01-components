import Profile from './profile/Profile';
import user from '../components/user.json';
import data from '../components/data.json';
import Statistics from './statistics/Statistics';
import FriendList from './friendlist/FriendList';
import friends from '../components/friends.json';
import TransactionHistory from './transaction/TransactionHistory';
import transactions from '../components/transactions.json';
export const App = () => (
    <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

      <Statistics
      stats={data}
/>
      <FriendList
      friends={friends}
      />
      <TransactionHistory
      transactions={transactions}
      />
      </div>
);
