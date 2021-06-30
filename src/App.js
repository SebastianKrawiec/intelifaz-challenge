import './App.css';
import FormUsers from './components/formUsers/FormUsers';
import DisplayUsers from './components/displayUsers/DisplayUsers';
import DisplayUsersDetails from './components/displayUsersDetails/DisplayUsersDetails';

import  UsersContextProvider from "./contexts/UsersContext";

function App() {
  return (
    <div className="App">
    <UsersContextProvider>

      <div className="App-container">
        <FormUsers/>
        <div className="App-subContainer">
        <DisplayUsers/>
        <DisplayUsersDetails />
        </div>
      </div>
    </UsersContextProvider>
    </div>
  );
}

export default App;
