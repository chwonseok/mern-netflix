import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import {
  Button,
  Buttons,
  Category,
  FeaturedImg,
  FeaturedInfo,
  StyledFeatured,
} from './styles/Featured.styed';

const Featured = ({ type }) => {
  return (
    <StyledFeatured>
      {type && (
        <Category>
          <span>{type === '영화' ? '영화' : 'TV 프로그램'}</span>
          <select name="genre" id="genre">
            <option>장르</option>
            <option value="어드벤쳐">어드벤쳐</option>
            <option value="comedy">코미디</option>
            <option value="crime">범죄</option>
            <option value="fantasy">판타지</option>
            <option value="historical">고전</option>
            <option value="horror">호러</option>
            <option value="romance">로맨스</option>
            <option value="sci-fi">SF</option>
            <option value="thriller">스릴러</option>
            <option value="western">외국 작품</option>
            <option value="animation">애니메이션</option>
            <option value="drama">드라마</option>
            <option value="documentary">다큐멘터리</option>
          </select>
        </Category>
      )}
      <FeaturedImg
        src="https://i.pinimg.com/originals/d4/b3/0e/d4b30ea3a48f2cd7abff3b8072f6b5b9.jpg"
        alt="background image"
      />

      <FeaturedInfo>
        <img
          src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABfzyg6lm0pZbZiWV8ScALWqN1PJAInSJyHf-lx-JM44UkCnL9MzqiNTkWBRpmFg58SGJZcetnlLxZ9kKcUQmLKdftnhL6Y9_pOtX.png?r=777"
          alt=""
        />
        <p>
          인류 멸망이 목전에 닥친 미래. 우주비행사들이 웜홀을 통해 광활한 우주를
          여행하며 인류가 살 수 있는 또 다른 행성을 찾아 나선다.
        </p>

        <Buttons>
          <Button
            bgColor={({ theme }) => theme.colors.text}
            txtColor={({ theme }) => theme.colors.main}
          >
            <PlayArrow />
            <h3>재생</h3>
          </Button>
          <Button
            bgColor="rgba(109, 109, 110, 0.7)"
            txtColor={({ theme }) => theme.colors.text}
          >
            <InfoOutlined />
            <h3>상세 정보</h3>
          </Button>
        </Buttons>
      </FeaturedInfo>
    </StyledFeatured>
  );
};

export default Featured;
