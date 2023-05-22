import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Adress from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";

function App() {
  return (
    <div className="app">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
