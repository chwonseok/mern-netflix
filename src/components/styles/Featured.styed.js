import styled from 'styled-components';

export const StyledFeatured = styled.div`
  height: 90vh;
  position: relative;
`;

export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedInfo = styled.div`
  position: absolute;
  width: 35%;
  bottom: 100px;
  left: 50px;
  color: ${({ theme }) => theme.colors.letter};
  img {
    width: 300px;
  }
`;

export const Button = styled.div``;
