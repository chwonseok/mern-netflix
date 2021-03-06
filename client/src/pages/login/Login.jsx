import {
  LoginBtn,
  LoginForm,
  LoginMain,
  LoginTop,
  StyledLogin,
} from '../../components/styles/Login.styled';

const Login = () => {
  return (
    <StyledLogin>
      <LoginTop>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </LoginTop>
      <LoginMain>
        <LoginForm>
          <h1>로그인</h1>
          <input type="email" placeholder="이메일 주소 또는 전화번호" />
          <input type="password" placeholder="비밀번호" />
          <LoginBtn className="loginButton">로그인</LoginBtn>
          <span>
            Netflix 회원이 아닌가요? <b>지금 가입하세요.</b>
          </span>
          <small>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다. <b>자세히 알아보기</b>
          </small>
        </LoginForm>
      </LoginMain>
    </StyledLogin>
  );
};

export default Login;
