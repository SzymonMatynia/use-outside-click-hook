import {LegacyRef, useEffect, useRef} from 'react';

const useOutsideClick = (handler: () => void): LegacyRef<HTMLElement> => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleClick = ({target}: MouseEvent) => {
      if (ref?.current && !ref.current.contains(target as Node)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
