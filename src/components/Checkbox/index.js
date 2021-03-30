import { useState } from 'react';

import { IoIosRadioButtonOff, IoIosCheckmarkCircle } from 'react-icons/io';

import './styles.css';

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);
  const { title } = props;
  return (
    <span className="checkbox" onClick={() => setIsChecked(!isChecked)}>
      <i className="checkbox-icon">
        {isChecked ? (
          <i className="checked">
            <IoIosCheckmarkCircle />
          </i>
        ) : (
          <IoIosRadioButtonOff />
        )}
      </i>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label className={isChecked ? 'checkbox-label strike' : 'checkbox-label'}>
        {title}
      </label>
    </span>
  );
}

export default Checkbox;
