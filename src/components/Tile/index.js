import StyledTiles from './styles';

import './styles.js';

function Tile(props) {
  const { children } = props;
  return <StyledTiles {...props}>{children}</StyledTiles>;
}

export default Tile;
