import { useState, useRef } from 'react';

import { IoMdSearch, IoMdClose } from 'react-icons/io';

import StyledSearch, { Icon, SearchBox, StyledListBox } from './styles';

import ListBox from '../ListBox';
import Button from '../Button';
import TextInput from '../TextInput';

function Search(props) {
  const { items, onClick } = props;

  const searchRef = useRef();

  const [searchTerm, setSearchTerm] = useState('');
  const [onFocus, setOnFocus] = useState(false);

  function editSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  function updateOptions() {
    return items.filter((e) =>
      e.item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  function clearSearch() {
    setSearchTerm('');
    setOnFocus(false);
  }

  function focusSearch() {
    searchRef.current.focus();
  }

  return (
    <StyledSearch>
      <SearchBox>
        <TextInput
          type="text"
          placeholder="find the product..."
          className="search-box"
          value={searchTerm}
          onChange={editSearchTerm}
          onFocus={() => {
            setOnFocus(true);
          }}
          // ref={searchRef}
          fullWidth
        ></TextInput>
        <Icon>
          {onFocus ? (
            <button onClick={clearSearch}>
              <IoMdClose />
            </button>
          ) : (
            <IoMdSearch />
          )}
        </Icon>
      </SearchBox>

      {onFocus === true ? (
        <StyledListBox>
          <ListBox options={updateOptions()} onClick={onClick} />
        </StyledListBox>
      ) : null}
    </StyledSearch>
  );
}
export default Search;
