import styled from 'styled-components';

export const StyledListItem = styled.div`
  width: 225px;
  height: 120px;
  margin-right: 5px;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    height: 140px;
  }
`;

export const HoveredItem = styled.div`
  width: 325px;
  height: 300px;
  position: absolute;
  top: -150px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.07);
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.07);
  border-radius: 5px;
`;

export const Trailer = styled.video`
  width: 100%;
  height: 140px;
  object-fit: cover;
  top: 0;
  left: 0;
`;

export const ItemInfo = styled.div`
  height: 150%;
  padding: 5px;
  background: ${({ theme }) => theme.colors.main};

  .itemInfoTop {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;

    .limit {
      border: 1px solid rgba(255, 255, 255, 0.07);
      padding: 1px 3px;
      margin: 0 10px;
    }
  }

  .desc {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .genre {
    font-size: 14px;
    color: #fff;
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-bottom: 10px;

  .icon {
    border: 2px solid #fff;
    padding: 5px;
    border-radius: 50%;
    margin-right: 10px;
    font-size: 16px;
  }
`;

/*
export const StyledListItem = styled.div`
  width: 225px;
  height: 120px;
  background: #fff;
  overflow: hidden;
  margin-right: 5px;
  cursor: pointer;
  color: white;

  &:hover {
    position: absolute;
    top: -150px;
    width: 325px;
    height: 300px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.07);
    border-radius: 5px;

    img {
      height: 140px;
    }

    .itemInfo {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 600;
      color: gray;

      .limit {
        border: 1px solid gray;
        padding: 1px 3px;
        margin: 0 10px;
      }

      .desc {
        font-size: 13px;
        margin-bottom: 10px;
      }

      .genre {
        font-size: 14px;
        color: lightgray;
      }
    }
  }
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Trailer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px;
  object-fit: cover;
`;
*/
