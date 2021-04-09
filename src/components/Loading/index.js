import gifs from '../helpers/loading';
import StyledLoading from './styles';

function Loading() {
  return (
    <StyledLoading>
      {gifs.map((g) => {
        return (
          <img
            key={g}
            src={process.env.PUBLIC_URL + '/images/' + g + '.gif'}
            alt="watermelon illustration"
          />
        );
      })}
    </StyledLoading>
  );
}

export default Loading;
