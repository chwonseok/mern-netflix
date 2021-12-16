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
    font-size: 3.2rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 1.5rem 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;

export const InputWrap = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
`;

export const InputEmail = styled.input`
  flex: 7;
  padding: 0 15px;
  height: 100%;
  font-size: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const InputPassword = styled.input`
  flex: 7;
  padding: 0 15px;
  height: 100%;
  font-size: 20px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const RegisterBtn = styled.button`
  flex: 3;
  height: 100%;
  padding: 0 15px;
  background-color: red;
  border: none;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
