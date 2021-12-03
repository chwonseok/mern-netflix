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

const List = () => {
  return (
    <StyledList>
      <h2>계속 시청하기</h2>

      <ListWrapper>
        <ListArrow arrow="left">
          <ArrowBackIosOutlined />
        </ListArrow>
        <ListContainer>
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
        <ListArrow arrow="right">
          <ArrowForwardIosOutlined />
        </ListArrow>
      </ListWrapper>
    </StyledList>
  );
};

export default List;
