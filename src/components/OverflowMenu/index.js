import { useState } from 'react';

import Button from '../Button';
import { IoEllipsisVertical } from 'react-icons/io5';

import OverflowMenuItem from './OverflowMenuItem';

import StyledOverflowMenu from './styles';

function OverflowMenu(props) {
  const { children } = props;

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledOverflowMenu role="main">
      <Button ghost onClick={() => setToggleMenu(!toggleMenu)}>
        <IoEllipsisVertical />
      </Button>

      {toggleMenu === true ? (
        <>
          <div className="blocker" onClick={() => setToggleMenu(false)}></div>{' '}
          <div className="overflow-menu--item">{children}</div>
        </>
      ) : null}
    </StyledOverflowMenu>
  );
}

OverflowMenu.Item = OverflowMenuItem;

export default OverflowMenu;
