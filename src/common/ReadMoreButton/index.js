import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from './styled';
import { selectLanguage } from '../Navigation/LanguageSelect/languageSlice';
import { readLess, readMore } from '../languages';

function ReadMoreButton({ content }) {
  const [show, setShow] = useState(false);
  const language = useSelector(selectLanguage);

  return content.length > 400 ? (
    <>
      {show ? content : `${content.slice(0, 400)}...`}
      <Button onClick={() => setShow((show) => !show)}>
        {show ? readLess[language] : readMore[language]}
      </Button>
    </>
  ) : (
    <>{content}</>
  );
}
export default ReadMoreButton;
