import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendsList';
import { Transaction } from './Transaction/Transaction';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transaction from './data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile 
        userProps={user}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title={'User stats'} stats={data} />
      <FriendsList friends={friends} />
      <Transaction items={transaction}/>
    </>
  );
};

