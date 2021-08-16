import Profile from './Profile/Profile.jsx';
import user from './Profile/user.json';

function App() {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;