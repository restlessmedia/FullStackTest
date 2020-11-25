import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './';

describe('Calculator', () => {
  test('number buttons', () => {
    const { getByText, getByRole } = render(<Calculator/>);

    const oneButton = getByRole('button', { name: '1' });
    const fourButton = getByRole('button', { name: '4' });

    oneButton.click();
    fourButton.click();
    oneButton.click();
    fourButton.click();

    expect(getByText('1414')).toBeTruthy();
  });

  test('clear button', () => {
    const { getByTestId, getByRole } = render(<Calculator/>);

    const oneButton = getByRole('button', { name: '1' });
    const clearButotn = getByRole('button', { name: 'AC' });

    oneButton.click();
    clearButotn.click();

    expect(getByTestId('calculator-display')).toHaveTextContent('0');
  });

  test('add button', () => {
    const { getByTestId, getByRole } = render(<Calculator/>);

    const oneButton = getByRole('button', { name: '1' });
    const addButton = getByRole('button', { name: '+' });
    const equalButton = getByRole('button', { name: '=' });

    oneButton.click();
    addButton.click();
    oneButton.click();
    equalButton.click();

    expect(getByTestId('calculator-display')).toHaveTextContent('2');
  });
});