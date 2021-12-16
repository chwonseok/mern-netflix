import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import {
  NavContainer,
  Logo,
  NavLeft,
  NavRight,
  StyledNav,
} from './styles/Nav.styled';

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    // cleanup function
    return () => (window.onscroll = null);
  };

  const handleDropdownMenu = () => {
    setDropdown(!dropdown);
  };

  return (
    <StyledNav scrolled={isScrolled && '#141414'}>
      <NavContainer>
        <NavLeft>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="home-logo"
          />
          <span>홈</span>
          <span>TV 프로그램</span>
          <span>영화</span>
          <span>NEW! 요즘 대세 콘텐츠</span>
          <span>내가 찜한 콘텐츠</span>
        </NavLeft>
        <NavRight>
          <Search />
          <span>키즈</span>
          <Notifications />
          <img
            onClick={handleDropdownMenu}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="user-icon"
          />
          {dropdown && <DropdownMenu />}
          <ArrowDropDown onClick={handleDropdownMenu} />
        </NavRight>
      </NavContainer>
    </StyledNav>
  );
};

export default Nav;
