import { useState } from 'react';

import { IoIosAddCircle } from 'react-icons/io';

import ListBoxOption from './ListBoxOption';
import { AddIcon } from './styles.js';

function ListBox(props) {
  const { options } = props;
  const [addNewItem, setAddNewItem] = useState(false);
  const [newItem, setNewItem] = useState(false);

  function addToList(e) {
    const newItem = e.target.value;
    console.log(`add to list: ${newItem}`);
  }

  console.log(addNewItem);

  return options.length < 1 ? (
    <>
      <ListBoxOption option="No results found..." />
      <ListBoxOption onClick={() => setNewItem(false)}>
        <i className="add-new-item--icon">
          <IoIosAddCircle />
        </i>{' '}
        Add New Item
      </ListBoxOption>
    </>
  ) : (
    <>
      {options.map((option) => {
        return (
          <ListBoxOption
            onClick={addToList}
            option={option.item}
            key={option.item}
            sub={option.aisle}
          >
            {option.item} ({option.aisle})
          </ListBoxOption>
        );
      })}
      <ListBoxOption onClick={() => setAddNewItem(true)}>
        <AddIcon>
          <IoIosAddCircle />
        </AddIcon>{' '}
        Add New Item
      </ListBoxOption>
    </>
  );
}

export default ListBox;
