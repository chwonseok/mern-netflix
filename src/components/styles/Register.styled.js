import styled from 'styled-components';

export const StyledRegister = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg');
  background-size: cover;
  position: relative;
`;

export const RegisterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 50px;
`;

export const Logo = styled.img`
  height: 25px;
  margin-right: 2.8rem;
  cursor: pointer;
`;

export const LoginBtn = styled.button`
  background: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const RegisterContainer = styled.section`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.common.flexCenterCol}
  position: absolute;
  top: 0;
  left: 0;
  color: white;

  h1 {
    font-size: 50px;
  }

  h2 {
    margin: 20px;
  }

  p {
    font-size: 20px;
  }
`;

export const InputEmail = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;

  input {
    flex: 7;
    padding: 0 15px;
    height: 100%;
    font-size: 20px;
    border: none;
  }

  button {
    flex: 3;
    height: 100%;
    background-color: red;
    border: none;
    color: #fff;
    font-size: 22px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
