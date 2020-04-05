import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DateResult from '../DateResult';

test('should have text from props', () => {
    const arr = ['2002']
    const { getByText } = render(<DateResult availableYears={arr} date='12.11.2020'></DateResult>)
    expect(getByText('12.11.2020').innerHTML).toBe('12.11.2020');
})

test('should return years from array', () => {
    const arr = ['2002, 2010']
    const { getByTestId } = render(<DateResult availableYears={arr}></DateResult>)
    expect(getByTestId('year').innerHTML).toBe('2002, 2010, ');
})