import ListBoxOption from './ListBoxOption';

function ListBox(props) {
  const { options, onClick } = props;

  return options.length < 1 ? (
    <>
      <ListBoxOption option="No results found..." />
    </>
  ) : (
    <>
      {options.map((option) => {
        return (
          <ListBoxOption
            onClick={onClick}
            option={option}
            key={option.id}
            sub={option.aisle}
          >
            {option.item} ({option.aisle})
          </ListBoxOption>
        );
      })}
    </>
  );
}

export default ListBox;
