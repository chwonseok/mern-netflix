import styled from 'styled-components';

export const StyledListItem = styled.div`
  position: relative;
  width: 225px;
  height: 120px;
  background: #fff;
  margin-right: 5px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  height: 140px;
  object-fit: cover;
`;

export const Trailer = styled.video`
  width: 200%;
  height: 200%;
`;

export const TrailerInfo = styled.div``;
