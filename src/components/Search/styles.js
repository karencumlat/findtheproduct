import styled, { css } from 'styled-components';

import { device } from '../../helpers/breakpoints';

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.span`
  position: absolute;
  right: 0.5em;
  top: 0.3em;
  font-size: 1.5em;
  color: #272d36;
`;

export const StyledListBox = styled.div`
  position: absolute;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 255px;
  overflow-y: scroll;
`;

export const StyledSearch = styled.div(
  ({ ...props }) => css`
    position: relative;
    ${Icon}
    ${SearchBox}
    ${StyledListBox}
  `
);

export default StyledSearch;
