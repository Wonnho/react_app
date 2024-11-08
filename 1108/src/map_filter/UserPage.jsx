import React from "react";
import UserItem from "./UserItem";

export default function UserPage() {
  const users = [
    { id: 1, name: "김철수", age: 25, hobby: "독서" },
    { id: 2, name: "이영희", age: 28, hobby: "요리" },
    { id: 3, name: "박민수", age: 23, hobby: "게임" },
  ];

  const userItems=users.map((user)=>{
    const {id,name,age,hobby}=user;
    return <UserItem {...user}></UserItem>;
    
  })
  return <>
  <ul>{userItems}</ul>
  </>
}
