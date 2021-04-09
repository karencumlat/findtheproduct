import { useState } from 'react';

import { IoIosRadioButtonOff, IoIosCheckmarkCircle } from 'react-icons/io';

import './styles.css';

function Checkbox(props) {
  const [checkedState, setCheckedState] = useState(false);

  function handleChecked(e) {
    setCheckedState(!checkedState);
    console.log(e.target.value);
  }

  const { labelName } = props;
  return (
    <label className="checkbox">
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
        onChange={handleChecked}
        checked={checkedState}
        value={labelName}
        {...props}
      />
      <span
        className={
          checkedState === true ? 'checkbox-label strike' : 'checkbox-label'
        }
      >
        {labelName}
      </span>
    </label>
  );
}

export default Checkbox;
