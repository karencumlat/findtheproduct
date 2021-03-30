import StyledListOption from './styles.js';

function ListBoxOption(props) {
  const { option, children, onClick } = props;

  return (
    <StyledListOption onClick={onClick} value={option}>
      {children ? children : option}
    </StyledListOption>
  );
}

export default ListBoxOption;
