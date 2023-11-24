import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import SignIn from "../routes/SignIn";

const BaseLayout = () => {
  return <StyledBaseLayout>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  </StyledBaseLayout>
};

const StyledBaseLayout = styled.div`
  height: 100%;
`;
export default BaseLayout;