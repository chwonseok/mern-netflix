import styled from 'styled-components';

export const StyledWatch = styled.div`
  width: 100%;
  height: 100vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BackArrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  left: 1.5rem;
  top: 1.5rem;

  font-size: 1.2rem;
  color: #fff;

  z-index: 2;
  cursor: pointer;

  svg {
    margin-right: 5px;
  }
`;
