import { PlayArrow } from '@material-ui/icons';
import {
  Button,
  FeaturedImg,
  FeaturedInfo,
  StyledFeatured,
} from './styles/Featured.styed';

const Featured = () => {
  return (
    <StyledFeatured>
      <FeaturedImg
        src="https://i.pinimg.com/originals/d4/b3/0e/d4b30ea3a48f2cd7abff3b8072f6b5b9.jpg"
        alt="background image"
      />

      <FeaturedInfo>
        <img
          src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfzyg6lm0pZbZiWV8ScALWqN1PJAInSJyHf-lx-JM44UkCnL9MzqiNTkWBRpmFg58SGJZcetnlLxZ9kKcUQmLKdftnhL6Y9_pOtX.png?r=777"
          alt=""
        />
        <span>
          인류 멸망이 목전에 닥친 미래. 우주비행사들이 웜홀을 통해 광활한 우주를
          여행하며 인류가 살 수 있는 또 다른 행성을 찾아 나선다.
        </span>

        <Button>
          <PlayArrow />
        </Button>
      </FeaturedInfo>
    </StyledFeatured>
  );
};

export default Featured;
