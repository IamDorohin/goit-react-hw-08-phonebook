import { PageName } from 'components/PagesName/PagesName.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactsPageContainer } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <main>
      <ContactsPageContainer>
        <PageName>Contacts list</PageName>
        <Filter />
        <ContactList />
      </ContactsPageContainer>
    </main>
  );
};
export default ContactsPage;
