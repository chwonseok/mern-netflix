import styled from 'styled-components';

export const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url('http://mppmduse2pmpovwapp.azurewebsites.net/wp-content/uploads/2019/09/netflix-background-9.jpg');
  background-size: cover;
  position: relative;
`;

export const LoginTop = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  padding: 20px 50px;

  img {
    height: 40px;
  }
`;

export const LoginMain = styled.section`
  ${({ theme }) => theme.common.flexCenterCol};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
`;

export const LoginForm = styled.form`
  width: 340px;
  height: 400px;
  padding: 40px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.main};
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  input {
    height: 50px;
    font-size: 1.2rem;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: #434646;
    border: none;
    color: white;
    padding-left: 10px;

    &::placeholder {
      color: lightgray;
    }

    &:focus {
      outline: none;
    }
  }
  span {
    color: lightgrey;
  }

  small {
    font-size: 0.9rem;
    color: lightgrey;

    b {
      color: #2057fc;
    }
  }
`;

export const LoginBtn = styled.button`
  height: 40px;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;
