import StyledHeader from './styles';

function Header(props) {
  const { children } = props;
  return <StyledHeader {...props}>{children}</StyledHeader>;
}
export default Header;
