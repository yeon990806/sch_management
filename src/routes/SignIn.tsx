import styled from "styled-components";
import Input from "../components/Input";
import { useState } from "react";

const SignIn = () => {
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  return <StyledSignIn>
    <img src="https://cdn.dtnews24.com/news/photo/202210/733084_339596_336.jpg" title="Logo" alt="logo" />
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
`;

const StyledSignInForm = styled.div`
  margin-top: 32px;
  display: grid;
  grid-row-gap: 16px;
`;

export default SignIn;