import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Price from '../Price';

const basket = [
    {
        price: 12
    },
    {
        price: 3
    }
]

test('should return result price of orders', () => {
    const { getByText } = render(<Price products={basket}></Price>)
    expect(getByText('15 zł').innerHTML).toBe('15 zł')
})