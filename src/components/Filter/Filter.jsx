import { useSelector, useDispatch } from 'react-redux';
import { filteredContactsName } from 'redux/filter/slice';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
import {
  FilterContainer,
  FilterInput,
  FilterIcon,
  FilterAddLink,
  FilterStats,
} from 'components/Filter/Filter.styled';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const contactsArray = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const filterContactsHandler = event => {
    dispatch(filteredContactsName(event.target.value));
  };

  return (
    <FilterContainer>
      <FilterInput
        type="text"
        value={filter}
        onChange={filterContactsHandler}
        placeholder="find by name"
      />
      <FilterIcon>
        <AiOutlineSearch fill="white" size={'15'} />
      </FilterIcon>
      <FilterAddLink to="/add">
        <AiFillPlusCircle size={'27'} />
      </FilterAddLink>
      <FilterStats>Number of contacts: {contactsArray.length}</FilterStats>
    </FilterContainer>
  );
};
