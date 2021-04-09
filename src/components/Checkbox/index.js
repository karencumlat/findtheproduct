import { IoIosRadioButtonOff, IoIosCheckmarkCircle } from 'react-icons/io';

import StyledCheckbox from './styles.js';

function Checkbox(props) {
  const { labelName, checkedState, onChange } = props;
  return (
    <StyledCheckbox {...props}>
      <i className="checkbox-icon">
        {checkedState === true ? (
          <i className="checked">
            <IoIosCheckmarkCircle />
          </i>
        ) : (
          <IoIosRadioButtonOff />
        )}
      </i>
      <input
        type="checkbox"
        value={labelName}
        checked={checkedState}
        onChange={onChange}
      />
      <span
        className={
          checkedState === true ? 'checkbox-label strike' : 'checkbox-label'
        }
      >
        {labelName}
      </span>
    </StyledCheckbox>
  );
}

export default Checkbox;
