import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Tabhost from "../components/Tabhost";
import { Color } from "../defines";

const SignIn = () => {
  const [userType, setUserType] = useState<number>(0);
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  return <StyledSignIn>
    <img src="https://cdn.dtnews24.com/news/photo/202210/733084_339596_336.jpg" title="Logo" alt="logo" />
    <Tabhost
      className="signin-tabhost"
      itemList={[
        { label: "학생", value: 0 },
        { label: "교수", value: 1 },
        { label: "관리자", value: 2 },
      ]}
      value={userType}
      onClick={setUserType}
    />
    <StyledSignInForm>
      <Input
        value={userId}
        onInput={setUserId}
        placeholder="ID"
        width={320}
      />
      <Input
        value={userPw}
        onInput={setUserPw}
        placeholder="Password"
        width={320}
      />
      <button>
        로그인
      </button>
    </StyledSignInForm>
  </StyledSignIn>
};

const StyledSignIn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 160px;
    height: 160px;
  }

  .signin-tabhost {
    margin-top: 32px;
  }
`;

const StyledSignInForm = styled.div`
  margin-top: 32px;
  display: grid;
  grid-row-gap: 16px;

  button {
    padding: 12px;
    border-radius: 8px;
    border: 0;
    background-color: ${Color.primaryColor};
    color: white;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: ${Color.lightenColor};
    }
  }
`;

export default SignIn;