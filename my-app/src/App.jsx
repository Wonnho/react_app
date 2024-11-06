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

export default App;
