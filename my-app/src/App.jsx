import React from "react";
<<<<<<< HEAD
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
=======

import AdminPage from "./AdminPage";
import UserPage from "./userPage";
import ManagerPage from "./ManagerPage";
export default function App() {
  return <OtherPage />;
>>>>>>> 7397b5bde6a492faa9e91f3a7a5e93a43d41d93d
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
