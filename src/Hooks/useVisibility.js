import { useState } from 'react';

function useVisibility(initial = true) {
  const [isVisible, setIsVisible] = useState(initial);

  const hide   = () => setIsVisible(false);
  const show   = () => setIsVisible(true);
  const toggle = () => setIsVisible((prev) => !prev);

  return { isVisible, hide, show, toggle };
}

export { useVisibility };