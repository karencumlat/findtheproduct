import StyledSelect from './styles';

function Select(props) {
  const { options, onChange, selectedItem } = props;

  return options.length < 1 ? (
    ''
  ) : (
    <StyledSelect onChange={onChange}>
      {options.sort().map((item) => {
        if (item === selectedItem) {
          return (
            <option key={item} value={item} selected>
              {item}
            </option>
          );
        } else {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        }
      })}
    </StyledSelect>
  );
}

export default Select;
