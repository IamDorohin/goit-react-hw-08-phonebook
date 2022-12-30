import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import {
  ContactsContainer,
  ContactsEmptyList,
  ContactsList,
  ContactItem,
  ContactDetails,
  ContactButton,
} from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const contactsArray = useSelector(state => state.contacts.items);
  const filteredNames = useSelector(state => state.filter);

  let normalizedFilter = filteredNames.toLowerCase();
  const filteredContactsArray = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  const sortedContactsArray = [...filteredContactsArray].sort(
    (prevPlayer, nextPlayer) => {
      const result = prevPlayer.name[0] > nextPlayer.name[0];
      if (result) {
        return 1;
      }

      return -1;
    }
  );

  const shouldEmptyListShow = contactsArray.length === 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsContainer>
      {shouldEmptyListShow ? (
        <ContactsEmptyList>
          Your list of contacts will be shown here after adding them.
        </ContactsEmptyList>
      ) : (
        <>
          <ContactsList>
            {sortedContactsArray.map(({ id, name, number }) => {
              return (
                <ContactItem key={id}>
                  <ContactDetails> {name} </ContactDetails>
                  <ContactDetails> {number} </ContactDetails>
                  <ContactButton
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </ContactButton>
                </ContactItem>
              );
            })}
          </ContactsList>
        </>
      )}
    </ContactsContainer>
  );
};

ContactList.propTypes = {
  contactsArray: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
