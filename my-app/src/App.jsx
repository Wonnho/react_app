import React from "react";
import AdminPage from "./AdminPage";
import UserPage from "./userPage";
import ManagerPage from "./ManagerPage";
export default function App() {
  return <OtherPage />;
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
