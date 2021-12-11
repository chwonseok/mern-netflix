import {
  LoginBtn,
  Logo,
  StyledRegister,
} from '../../components/styles/Register.styled';

const Register = () => {
  return (
    <StyledRegister>
      <div>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt="home-logo"
        />
        <LoginBtn>Sign In</LoginBtn>
      </div>
    </StyledRegister>
  );
};

export default Register;
