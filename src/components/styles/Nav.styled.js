import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;
  background: ${({ scrolled }) => scrolled || null};
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);

  color: ${({ theme }) => theme.colors.letter};
  font-size: 14px;

  padding: 20px 50px;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 0.6rem;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  height: 25px;
  margin-right: 2.8rem;
  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;

  svg,
  span {
    margin: 0 0.8rem;
    cursor: pointer;
  }

  img {
    height: 33px;
    border-radius: 5px;
    cursor: pointer;
  }
`;
