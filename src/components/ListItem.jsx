import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';
import {
  Hovered,
  ItemImg,
  ItemInfo,
  StyledListItem,
  Trailer,
} from './styles/ListItem.styled';
import { useState } from 'react';

const ListItem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

  return (
    <StyledListItem
      onClick={() => setIsHovered(!isHovered)}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      <ItemImg src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/22cc4f414242a5124d729a21845cc341955b338b72fa98da3ca71c49510a371b._RI_.jpg" />
      {isHovered && (
        <Hovered>
          <Trailer src={trailer} autoPlay={true} loop />
          <ItemInfo>
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </ItemInfo>
        </Hovered>
      )}
    </StyledListItem>
  );
};

export default ListItem;
