import React from "react";
<<<<<<< HEAD
import menu from "./component/menu/menu";
function App() {
  return (
    <>
      <menu></menu>
    </>
  );
=======
import PackingList from "./PackingList";
function App() {
  const cold = false;
  let result;
  if (cold) {
    result = <div>cold</div>;
  } else {
    result = <div>Not cold</div>;
  }
  return(
    <>
    result;
    <PackingList></PackingList>
    </>
  ) 
>>>>>>> 97ff5540d99a13d59072ce22c57b3a4c71d96a96
}

function OtherPage() {
  const userType = "User";
  let pageComponent;

  if (userType === "Admin") {
    pageComponent = <AdminPage />;
  } else if (userType === "manager") {
    pageComponent = <ManagerPage />;
  } else {
    pageComponent = <UserPage />;
  }

  return <>{pageComponent}</>;
}
