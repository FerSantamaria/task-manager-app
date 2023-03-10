import { useEffect, useRef } from "react";

//This hooks creates a listener for checking when a click or scrolls events happens outside an element 
export const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('scroll', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.addEventListener('scroll', handleClick, true);
    };
  }, [ref]);

  return ref;
};