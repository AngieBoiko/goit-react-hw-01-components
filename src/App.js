import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';
import statisticalData from './Statistics/statistical-data.json';
import StatisticsSection from './Statistics/StatisticsSection';
import StatisticsList from './Statistics/StatisticsList';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList.jsx';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsSection title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </StatisticsSection>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
