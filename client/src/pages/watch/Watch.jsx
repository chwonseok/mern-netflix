import { ArrowBackOutlined } from '@material-ui/icons';
import { BackArrow, StyledWatch } from '../../components/styles/Watch.styled';

const Watch = () => {
  return (
    <StyledWatch>
      <BackArrow>
        <ArrowBackOutlined />
        Home
      </BackArrow>
      <video src="./sample.mp4" autoPlay controls />
    </StyledWatch>
  );
};

export default Watch;
