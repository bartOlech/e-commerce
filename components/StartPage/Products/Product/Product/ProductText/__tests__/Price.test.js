import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Price from '../Price';

afterEach(cleanup)

test('Should provide props value', () => {
    const { getByText } = render(<Price price='price'/>)

    expect(getByText('pricezł').innerHTML).toBe('pricezł')
})

