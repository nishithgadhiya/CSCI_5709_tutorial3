import React from "react";

function Profile(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.setIsUserLogged(false);
  };
  return (
    <div
      style={{
        fontSize: "1.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>First Name: {props.firstName}</h4>
      <h4>Last Name: {props.lastName}</h4>
      <h4>Email: {props.email}</h4>
      <button style={{ width: "5rem" }} onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default Profile;
