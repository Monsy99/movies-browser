import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { languages } from '../../languages';
import { selectLanguage, setLanguage } from './languageSlice';
import { Select, SelectContainer } from './styled';

function LanguageSelect({ handleClose, mobile }) {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const handleChange = ({ target }) => {
    handleClose();
    dispatch(setLanguage(target.value));
  };

  return (
    <SelectContainer mobile={mobile}>
      <Select value={language} onChange={handleChange}>
        {languages.map((lang) => (
          <option value={lang.code} key={lang.code}>
            {lang.label}
          </option>
        ))}
      </Select>
    </SelectContainer>
  );
}

export default LanguageSelect;
