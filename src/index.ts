import {LegacyRef, useEffect, useRef} from 'react';

type RefType = LegacyRef<any>;
const useOutsideClick = (callback: () => void) => {
  const ref: RefType = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        callback();
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
