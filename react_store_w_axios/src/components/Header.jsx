import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../store/slices/authSlice";
login;
export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header>
      <div>
        {isLoggedIn ? (  //login 상태라면 클릭했을 때 logout 함수를 reducer로 실행하여 로그아웃 버튼을 보여줌
        //현재는 login=true 상태
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            LogIn
          </button>
        )}
      </div>
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        {isLoggedIn&&( 
        <li>
          <Link to="/posts/create">게시글 생성</Link>
        </li>
        )}
      </ul>
    </header>
  );
}
