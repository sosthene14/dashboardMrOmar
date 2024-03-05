import { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import { CiLight } from 'react-icons/ci';
import { MdNightsStay } from 'react-icons/md';
import './Switcher.css';

export const Switcher = () => {
  const [checked, setChecked] = useState(false);
  const element: any = document.documentElement;

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        setChecked(false);
        element.classList.add('dark');
      } else if (storedTheme === 'light') {
        setChecked(true);
        element.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      if (checked) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, [checked]);

  return (
    <div>
      <label>
        <Toggle
          checked={checked}
          icons={{
            checked: <CiLight color="white" className="-mt-[2px]" />,
            unchecked: <MdNightsStay color="white" className="-mt-[2px]" />,
          }}
          onChange={() => {
            setChecked(!checked);
            localStorage.setItem('theme', !checked ? 'light' : 'dark');
          }}
        />
      </label>
    </div>
  );
};
