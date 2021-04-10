import styled from 'styled-components';
import TOKENS from '../../components/Tokens';

export const Header = styled.div`
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

export const ProductTile = styled.div`
  .product-tile--item {
    padding: 0.5em 0;
    display: flex;
    margin: 0.5em 0;
    align-items: center;

    .product-tile--name {
      margin: 0 0 0 1rem;
      flex: 2;
      text-transform: capitalize;
      display: flex;
      flex-direction: column;

      span {
        font-size: 0.75em;
        color: ${TOKENS.COLOR.GRAY50};
      }
    }
  }

  .add-new-item {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding: 0 0 1.5em;
    background-color: ${TOKENS.COLOR.WHITE};
    border: none;
  }
`;

export const AddNewItem = styled.div`
  background: ${TOKENS.COLOR.WHITE};
  width: 90%;
  top: 50%;
  transform: translate(0, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: absolute;

  .modal--close-btn {
    position: absolute;
    top: 0.25em;
    right: 0.25em;
    padding: 0;
    font-size: 2em;
  }

  h3 {
    margin: 1em;
  }

  > input {
    margin: 1em;
  }

  .modal-btn {
    display: flex;
    width: 100%;
    margin: 1em 0 0 0;
    > btn {
      flex: 1;
    }
  }
`;
