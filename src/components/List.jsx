import ListItem from './ListItem';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import {
  ListArrow,
  ListContainer,
  ListWrapper,
  StyledList,
} from './styles/List.styled';
import { useState } from 'react';

const List = () => {
  const [slider, setSlider] = useState(0);

  const handleArrow = (direction) => {
    if (direction === 'left' && slider > 0) {
      setSlider((prev) => prev - 1);
    }

    if (direction === 'right' && slider < 4) {
      setSlider((prev) => prev + 1);
    }
  };

  return (
    <StyledList>
      <h2>계속 시청하기</h2>

      <ListWrapper>
        <ListArrow
          arrow="left"
          onClick={() => {
            handleArrow('left');
          }}
        >
          <ArrowBackIosOutlined />
        </ListArrow>

        <ListContainer slider={slider}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ListContainer>

        <ListArrow
          arrow="right"
          onClick={() => {
            handleArrow('right');
          }}
        >
          <ArrowForwardIosOutlined />
        </ListArrow>
      </ListWrapper>
    </StyledList>
  );
};

export default List;
