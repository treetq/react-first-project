import "./App.css";
import ProfilePhoto from "./Components/Profile/ProfilePhoto";
import Adress from "./Components/Profile/Address";
import FullName from "./Components/Profile/FullName";

function App() {
  return (
    <div className="app">
      {/* put those components inside the app component */}
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
