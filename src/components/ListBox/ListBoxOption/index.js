import StyledListOption from './styles.js';

function ListBoxOption(props) {
  const { option, children, onClick, title } = props;

  return (
    <StyledListOption onClick={onClick} value={option.id}>
      {children ? children : title}
    </StyledListOption>
  );
}

export default ListBoxOption;
