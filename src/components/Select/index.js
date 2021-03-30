import StyledSelect from './styles';

function Select(props) {
  const { options, onChange } = props;

  return options.length < 1 ? (
    ''
  ) : (
    <StyledSelect onChange={onChange}>
      {options.sort().map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default Select;
