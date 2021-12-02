import styled from 'styled-components';

export const StyledDropdownMenu = styled.div`
  position: absolute;
  width: 160px;
  right: 4rem;
  top: 80px;
  background: ${({ theme }) => theme.colors.main};

  h2 {
    margin: 1rem;
  }
`;
