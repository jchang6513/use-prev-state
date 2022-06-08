# usePrevState

A simple hook that returns the previous state

## Usage

```typescript
import React, { useState } from 'react';
import usePrevState from 'use-prev-state';

const Demo = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};
```
