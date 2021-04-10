import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0.5rem 0;

  h1 {
    font-size: 1.5rem;
    flex: 1;
  }

  & > button {
    font-size: 2rem;
    padding: 0 0.5rem 0 0;
  }
`;

export default StyledHeader;
