import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../store/slices/postsSlice";
import { useNavigate } from "react-router-dom";

export default function PostCreate() {
  // function handleChange(e) {
  //   const inputValue = e.target.value;
  //   const key = e.target.name;
  //   data = new FormData(form);

  //   setFormData({
  //     ...FormData,
  //     [key]: inputValue,
  //   });
  // }

  const [formData, setFormData] = useState({ title: "", content: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const inputValue = e.target.value;
    const key = e.target.name;
    setFormData({
      ...formData,
      [key]: inputValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    // dispatch(addPost(payload));
    const id = Date.now();
    dispatch(addPost({ ...formData, id: Date.now() }));
    navigate(`/posts/${id}`);
  }

  return (
    <div>
      <h3>PostCreate</h3>
      <button
        onClick={() => {
          console.log(formData);
        }}
      >
        출력
      </button>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input type="text" name="title" id="title" onChange={handleChange} />
        <label htmlFor="content">
          <textarea
            name="content"
            id="content"
            onChange={handleChange}
          ></textarea>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
}
