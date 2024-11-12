<<<<<<< HEAD
import React from "react";
import Button from "./Button";
export default function ButtonContainer() {
  const buttonColor = ["blue", "red", "yellow"];
  const buttonText = ["확인", "취소", "보류", "1억년"];

  const buttonData = [
    { backgroundColor: "blue", text: "확인" },
    { backgroundColor: "red", text: "취소" },
    { backgroundColor: "gred", text: "보류" },
    { backgroundColor: "pink", text: "1억년" },
  ];
  const button = buttonData.map((btn) => {
    const { backgroundColor, text } = btn;
    return <Button backgroundColor={backgroundColor}>{text}</Button>;
  });

  return (
    <div>
      {/* <Button backgroundColor="blue" >확인</Button>
      <Button backgroundColor="blue" >취소</Button>
      <Button backgroundColor="blue" >보류</Button>
      <Button backgroundColor="blue">1억년</Button> */}
      {button}
    </div>
  );
}
=======
import React from "react";
import Button from "./Button";
export default function ButtonContainer() {
  const buttonColor = ["blue", "red", "yellow"];
  const buttonText = ["확인", "취소", "보류", "1억년"];

  const buttonData = [
    { backgroundColor: "blue", text: "확인" },
    { backgroundColor: "red", text: "취소" },
    { backgroundColor: "gred", text: "보류" },
    { backgroundColor: "pink", text: "1억년" },
  ];
  const button = buttonData.map((btn) => {
    const { backgroundColor, text } = btn;
    return <Button backgroundColor={backgroundColor}>{text}</Button>;
  });

  return (
    <div>
      {/* <Button backgroundColor="blue" >확인</Button>
      <Button backgroundColor="blue" >취소</Button>
      <Button backgroundColor="blue" >보류</Button>
      <Button backgroundColor="blue">1억년</Button> */}
      {button}
    </div>
  );
}
>>>>>>> 97ff5540d99a13d59072ce22c57b3a4c71d96a96
