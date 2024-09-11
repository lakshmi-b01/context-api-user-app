import logo from './logo.svg';
import './App.css';
import UserInfoContext from './context/UserInfoContext';
import BlockPage from './components/BlockPage';

export default function App() {
  const userInfo = {username: "guest", isAdmin: true};
  return (
    <UserInfoContext.Provider value={userInfo}>
      <BlockPage username={userInfo.username} isAdmin={userInfo.isAdmin}></BlockPage>
    </UserInfoContext.Provider>
  );
}