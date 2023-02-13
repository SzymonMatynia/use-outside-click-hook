# React outside click hook

React use outside click hook. It's a simple hook that allows you to detect clicks outside of a component.

# Simple example

```js
import {useState} from 'react';
import useOutsideClick from 'use-outside-click-hook';

const ExampleComponent = () => {
  const [show, setIsClicked] = useState(false);

  const ref = useOutsideClick(() => {
    setIsClicked(true);
  });

  return (
    <div ref={ref}>
      {isClicked ? 'Clicked outside' : 'Waiting for click outside'}
    </div>
  );
};
```
