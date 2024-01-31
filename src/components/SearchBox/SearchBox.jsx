import { useId } from 'react';
import css from './SearchBox.module.css';
import { HiSearch } from 'react-icons/hi';

export const SearchBox = ({ value, onChange }) => {
  const searchId = useId();

  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={searchId}>
        <HiSearch />
        Find contacts by name
      </label>
      <input id={searchId} type="text" value={value} onChange={evt => onChange(evt.target.value)} />
    </div>
  );
};
