import { useState } from 'react';

import { IoMdSearch, IoMdClose } from 'react-icons/io';

import StyledSearch, { Icon, SearchBox, StyledListBox } from './styles';

import ListBox from '../ListBox';
import TextInput from '../TextInput';

function Search(props) {
  const { items, onClick, placeholder } = props;

  const [searchTerm, setSearchTerm] = useState('');
  const [onFocus, setOnFocus] = useState(false);

  function editSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const options = items.filter((e) =>
    e.item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function clearSearch() {
    setSearchTerm('');
    setOnFocus(false);
  }
  return (
    <StyledSearch>
      <SearchBox>
        <TextInput
          type="text"
          placeholder={placeholder ? placeholder : 'find the product...'}
          className="search-box"
          value={searchTerm}
          onChange={editSearchTerm}
          onFocus={() => {
            setOnFocus(true);
          }}
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
          <ListBox>
            {options.length === 0 ? (
              <ListBox.Option title="No results found..." option="" />
            ) : (
              options.map((option) => {
                return (
                  <ListBox.Option
                    onClick={onClick}
                    option={option}
                    title={`${option.item} (${option.aisle})`}
                    key={option.id}
                    sub={option.aisle}
                  />
                );
              })
            )}
          </ListBox>
        </StyledListBox>
      ) : null}
    </StyledSearch>
  );
}
export default Search;
