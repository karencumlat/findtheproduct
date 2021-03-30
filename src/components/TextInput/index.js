import StyledInput from './styles.js';

function TextInput(props) {
  const { type, placeholder, onChange, value, onFocus } = props;
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      {...props}
    />
  );
}

export default TextInput;
