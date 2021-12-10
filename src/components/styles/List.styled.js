import styled from 'styled-components';

export const StyledList = styled.div`
  width: 100%;
  margin: 20px 0;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 50px;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
`;

export const ListArrow = styled.svg`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 50px;
  height: 100%;
  background: rgb(22, 22, 22, 0.5);
  color: #fff;
  cursor: pointer;
  ${({ arrow }) => arrow || ''}: 0;
`;

export const ListContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 50px;
  width: max-content;

  transform: ${({ slider }) => `translateX(-${245 * slider}px)`};
  transition: all 0.4s ease-out;
`;
