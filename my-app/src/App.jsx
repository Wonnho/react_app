import React from "react";
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
