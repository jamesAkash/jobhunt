import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutUser } from "../../features/user/userSlice";

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #191537;
    color: white;
    padding: 20px 40px;
    font-size: 24px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
  }
`;
const TestComponent = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logoutUser());
  };
  return (
    <Wrapper>
      <button onClick={handleClick}>Logout</button>
    </Wrapper>
  );
};

export default TestComponent;
