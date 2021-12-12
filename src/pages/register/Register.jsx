import { useRef, useState } from 'react';
import {
  InputEmail,
  LoginBtn,
  Logo,
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
        <LoginBtn>Sign In</LoginBtn>
      </RegisterTop>
      <RegisterContainer>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <InputEmail>
            <input type="text" placeholder="email address" ref={emailRef} />
            <button onClick={handleEmail}>Get Started</button>
          </InputEmail>
        ) : (
          <InputEmail>
            <input type="password" placeholder="password" ref={passwordRef} />
            <button onClick={handleStart}>Start</button>
          </InputEmail>
        )}
      </RegisterContainer>
    </StyledRegister>
  );
};

export default Register;
