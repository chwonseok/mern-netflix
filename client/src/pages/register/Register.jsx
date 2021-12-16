import { useRef, useState } from 'react';
import {
  InputEmail,
  InputPassword,
  InputWrap,
  LoginBtn,
  Logo,
  RegisterBtn,
  RegisterContainer,
  RegisterTop,
  StyledRegister,
} from '../../components/styles/Register.styled';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };
  const handleStart = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <StyledRegister>
      <RegisterTop>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="home-logo"
        />
        <LoginBtn>로그인</LoginBtn>
      </RegisterTop>
      <RegisterContainer>
        <h1>영화와 시리즈를 무제한으로.</h1>
        <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
        <p>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </p>
        {!email ? (
          <InputWrap>
            <InputEmail
              type="email"
              placeholder="이메일 주소"
              require="true"
              ref={emailRef}
            />
            <RegisterBtn onClick={handleEmail}>시작하기</RegisterBtn>
          </InputWrap>
        ) : (
          <InputWrap>
            <InputPassword
              type="password"
              require="true"
              placeholder="비밀번호"
              ref={passwordRef}
            />
            <RegisterBtn onClick={handleStart}>Start</RegisterBtn>
          </InputWrap>
        )}
      </RegisterContainer>
    </StyledRegister>
  );
};

export default Register;
