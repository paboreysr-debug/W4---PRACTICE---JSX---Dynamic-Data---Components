import "./App.css";

function ProfileIcon(users) {
  return (
    <div>
      <p>User: {users.user}</p>
    </div>
  );
}
function Header(users) {
  return (
    <div>
      <ProfileIcon user={users.user} />
    </div>
  );
}
function App() {
  const user = "John Doe";
  return (

    <div>
      <Header user={user} />
    </div>
  );
}
export default App;
