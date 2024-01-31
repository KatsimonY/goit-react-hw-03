import { HiUser, HiPhone } from 'react-icons/hi';
import css from './Contact.module.css';

export const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div>
        <p className={css.info}>
          <HiUser />
          {contact.name}
        </p>
        <p className={css.info}>
          <HiPhone />
          {contact.number}
        </p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
};
