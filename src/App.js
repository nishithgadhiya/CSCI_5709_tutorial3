import "./App.css";
import React, { useState } from "react";
import Profile from "./components/Profile";
import Registration from "./components/Registration";

function App() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      {isUserLogged ? (
        <Profile
          setIsUserLogged={setIsUserLogged}
          firstName={firstName}
          lastName={lastName}
          email={email}
        />
      ) : (
        <Registration
          setIsUserLogged={setIsUserLogged}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}

export default App;
