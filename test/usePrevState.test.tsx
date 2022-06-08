import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import usePrevState from '../src';

const TestComp = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevState(count);
  return (
    <div>
      <span className="prev-count">{prevCount}</span>
      <span className="count">{count}</span>
      <button onClick={() => setCount(count + 1)} />
    </div>
  );
};

describe('usePreviousState', () => {
  it('renders without crashing', () => {
    const container = document.createElement('div');
    act(() => {
      ReactDOM.createRoot(container).render(<TestComp />);
    });

    const prevCount = container.querySelector('span.prev-count');
    const currentCount = container.querySelector('span.count');
    expect(prevCount?.textContent).toBe('0');
    expect(currentCount?.textContent).toBe('0');

    const addButton = container.querySelector('button');
    act(() => {
      addButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(prevCount?.textContent).toBe('0');
    expect(currentCount?.textContent).toBe('1');
  });
});
