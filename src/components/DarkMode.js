import React from 'react';
import { changeDarkMode } from '../Action/Auth';
import CustomCheckbox from './CustomCheckbox';
import { useSelector, useDispatch } from 'react-redux';
export default function DarkMode() {
  const { darkMode } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const handleDarkModeChange = () => {
    dispatch(changeDarkMode(!darkMode));
  };

  return (
    <>
      <CustomCheckbox
        title={darkMode ? 'Turn Off Dark Mood' : 'Turn On Dark Mode'}
        onChange={handleDarkModeChange}
        checked={darkMode}
      />
    </>
  );
}
