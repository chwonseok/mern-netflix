import styled from 'styled-components';

export const StyledFeatured = styled.div`
  height: 90vh;
  position: relative;
`;

export const Category = styled.div`
  position: absolute;
  top: 80px;
  left: 50px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.common.flexCenter}

  span {
    font-size: 2.5rem;
    font-weight: 600;
  }

  select {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid #fff;
    z-index: 1;

    margin-left: 2.5rem;
    padding: 5px;
    cursor: pointer;

    &:hover {
      background: transparent;
    }
  }
`;

export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedInfo = styled.div`
  position: absolute;
  width: 35%;
  bottom: 24%;
  left: 50px;
  color: ${({ theme }) => theme.colors.text};

  img {
    width: 300px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const Buttons = styled.div`
  ${({ theme }) => theme.common.flexCenter}
`;

export const Button = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  cursor: pointer;
  padding: 0.4rem 1rem;
  margin: 20px 5px;
  border-radius: 5px;

  background: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};

  &:hover {
    opacity: 0.8;
  }

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;
