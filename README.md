# React outside click hook

React use outside click hook. It's a simple hook that allows you to detect clicks outside of a component.

# Simple example

```js
import React from 'react';
import useOutsideClick from 'react-outside-click-hook';

const ExampleComponent = () => {
  const [show, setIsClicked] = React.useState(false);

  const ref = useOutsideClick(() => {
    setIsClicked(true);
  });

  return (
    <div ref={ref}>
      {isClicked ? 'Clicked outside' : 'Click outside'}
    </div>
  );
};
```
