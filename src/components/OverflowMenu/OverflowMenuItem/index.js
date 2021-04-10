import StyledOverflowMenuItem from './styles';

function OverflowMenuItem(props) {
  const { label } = props;
  // hasDivider, isDanger
  return <StyledOverflowMenuItem {...props}>{label}</StyledOverflowMenuItem>;
}

export default OverflowMenuItem;
