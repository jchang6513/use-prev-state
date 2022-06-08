import React from 'react';
import { Meta, Story } from '@storybook/react';
import { usePrevState } from '../src';
import styled from 'styled-components';

const meta: Meta = {
  title: 'use-prev-state',
  argTypes: {
    text: {
      defaultValue: 'Hello World',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  * {
    border: 1px solid black;
  }

  th,
  td {
    padding: 10px;
  }
`;

const UsePrevState: Story<{ text: string }> = (props: { text: string }) => {
  const { text } = props;
  const prevText = usePrevState(text);

  return (
    <StyledTable>
      <tr style={{ border: '1px' }}>
        <th>Current Text</th>
        <th>Prev Text</th>
      </tr>
      <tr>
        <td>{text}</td>
        <td>{prevText}</td>
      </tr>
    </StyledTable>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = UsePrevState.bind({});

Default.args = {};
